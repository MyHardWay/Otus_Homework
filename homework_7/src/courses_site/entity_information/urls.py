from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from .views import CourseViewSet, StudentView, LoginView, LogoutView

router = DefaultRouter()
router.register('course', CourseViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/user', StudentView.as_view()),
    url(r'^login', LoginView.as_view()),
    url(r'^logout', LogoutView.as_view()),


]