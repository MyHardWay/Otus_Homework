from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication,\
    BasicAuthentication
from django.contrib.auth.models import User
from .models import Course

from .serializers import UserSerializer, CourseSerializer
#from myapp.serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

class CourseViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing the accounts
    associated with the user.
    """

    authentication_classes = (SessionAuthentication, BasicAuthentication)
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

    """
    def get_queryset(self):
        return self.request.user.accounts.all()
    """

class UserViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing the accounts
    associated with the user.
    """

    serializer_class = UserSerializer
    queryset = User.objects.all()

    """
    def get_queryset(self):
        return self.request.user.accounts.all()
    """