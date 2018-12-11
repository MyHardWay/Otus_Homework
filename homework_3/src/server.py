import http.client
import json
import re


class Application:
    redirect_when_no_trailing_slash = True

    handlers_map = {}

    def __init__(self):
        self.url_params = {}

    def add_handler(self, url, handler_callable):
        self.handlers_map[url] = handler_callable

    def __call__(self, env, start_response):
        start_response('200 OK', [('Content-Type','text/html')])
        path = env['PATH_INFO']
        headers = {'Content-Type': 'text/html'}
        response_text = ''

        if not path.endswith('/') and self.redirect_when_no_trailing_slash:
            handler = self.trailing_slash_redirect_handler
        else:
            handler = self.not_found_handler
            for handler_ in self.__class__.handlers_map.keys():
                match = re.match(handler_, path)
                if match:
                    handler = self.__class__.handlers_map[handler_]
                    self.url_params = match.groupdict()
                    break

        response_info = handler(env)
        response_status = response_info.get('status_code', 200)

        if 'text' in response_info:
            response_text = response_info['text']
        elif 'json' in response_info:
            response_text = json.dumps(response_info['json'])
            headers['Content-Type'] = 'json'

        extra_headers = response_info.get('headers', {})
        headers.update(extra_headers)

        response_body = response_text.encode('utf-8')

        start_response('{0} {1}'.format(
            response_status, http.client.responses[response_status]),
            list(headers.items())
        )

        return [response_body]

    @staticmethod
    def not_found_handler(env):
        return {'text': 'Not found',
                'status_code': 404
                }

    @staticmethod
    def trailing_slash_redirect_handler(env):
        return {
            'status_code': 301,
            'headers': {'Location': '{0}/'.format(env['PATH_INFO'])}
        }

    @classmethod
    def route(cls, route_path):
        def wrapper(func_):
            cls.handlers_map[route_path] = func_
            return func_
        return wrapper
