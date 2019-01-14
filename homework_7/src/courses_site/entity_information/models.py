from django.db import models
from django.conf import settings


class Language(models.Model):

    title = models.CharField(max_length=64, unique=True)

    def __repr__(self):
        return "Programming language: {}".format(self.title)


class Course(models.Model):

    title = models.CharField(max_length=64, unique=True)
    prize = models.IntegerField()
    language = models.ForeignKey(Language)
    img_path = models.CharField(max_length=128, unique=True)
    teacher = models.ForeignKey(settings.AUTH_USER_MODEL,
                                related_name='course_teacher')
    students = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                      related_name='course_students')

    def __repr__(self):
        return "User: {}".format(self.title)


class Lesson(models.Model):

    title = models.CharField(max_length=64, unique=True)
    img_path = models.CharField(max_length=128)
    course = models.ForeignKey(Course)

    def __repr__(self):
        return "Lesson: {}".format(self.title)


class Profile(models.Model):

    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='user')
    img_path = models.CharField(max_length=128, unique=True)
    add_info = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    second_name = models.CharField(max_length=128)

    def __repr__(self):
        return "User: {} {}".format(self.name, self.second_name)
