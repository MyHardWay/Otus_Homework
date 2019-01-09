from rest_framework import serializers


class CourseSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=64)
    prize = serializers.IntegerField()


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=64)
    password = serializers.CharField(max_length=64)