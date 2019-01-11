from rest_framework import viewsets, views, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from .models import Course

from .serializers import CourseSerializer


class CourseViewSet(viewsets.ModelViewSet):

    permission_classes = (IsAuthenticated,)
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


class StudentView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        data = request.data

        course_id = data.get('course')
        if course_id:
            try:
                course = Course.objects.get(id=course_id)
                course.students.add([data.user])
            except Course.ObjectDoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


class LoginView(views.APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        data = request.data

        username = data.get('username')
        password = data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_404_NOT_FOUND)


class LogoutView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        logout(request)
        return Response(status=status.HTTP_200_OK)
