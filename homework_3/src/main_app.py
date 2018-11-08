from common_main import make_request, get_data_from_environ

def application(environ, start_response):
    lines = []
    request = make_request(environ)
    print(request)

    for key, value in environ.items():
        lines.append("%s: %r" % (key, value))
    start_response("200 OK", [("Content-Type", "text/plain")])
    return ["\n".join(lines)]