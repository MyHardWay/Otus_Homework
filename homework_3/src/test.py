from server import Application


def contacts_handler(env):
    return {'text': 'Moscow',
            'status_code': 200,
            'headers': {'Content-type': 'text'}
            }


@Application.route('/test/')
def test_handler(env):
    return {'text': 'Hello'
            }


@Application.route('/contacts/')
def index_handler(env):
    return {'text': 'Hello'
            }


@Application.route('/api/courses/(?P<product_id>\w+)/')
def api_courses_list_handler(env):
    return {'json': [{'title': 'Webdev'}]
            }


application = Application()
