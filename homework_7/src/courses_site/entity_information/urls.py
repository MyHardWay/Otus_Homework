from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from .views import CourseViewSet, UserViewSet

router = DefaultRouter()
router.register('course', CourseViewSet)
router.register('user', UserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]