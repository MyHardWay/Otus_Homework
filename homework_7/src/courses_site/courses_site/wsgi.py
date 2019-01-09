#os.environ.setdefault("DJANGO_SETTINGS_MODULE", "courses_site.settings")

from configurations.wsgi import get_wsgi_application

application = get_wsgi_application()


