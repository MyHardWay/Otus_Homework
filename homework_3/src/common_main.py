def make_request(environ):
    request_ = {}
    request_['method'] = environ.get('REQUEST_METHOD')
    request_['data'] = get_data_from_environ(environ)
    request_['url'] = environ.get('PATH_INFO')
    return request_    
    
def get_data_from_environ(environ):
    body = ''
    try:
        length = int(environ.get('CONTENT_LENGTH', '0'))
    except ValueError:
        length = 0
    if length:
        body = environ['wsgi.input'].read(length)
    return body
    