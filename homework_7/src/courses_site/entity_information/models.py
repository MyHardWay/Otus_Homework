from django.db import models
from django.conf import settings

class Language(models.Model):

    title = models.CharField(max_length=64, unique=True)

    def __repr__(self):
        return '<Programming language: %r>' % (self.title)


class Teacher(models.Model):

    user = models.OneToOneField(settings.AUTH_USER_MODEL)
    img_path = models.CharField(max_length=128, unique=True)

    def __repr__(self):
        return '<Teacher %s %s >' % (self.name, self.second_name)


class Course(models.Model):

    title = models.CharField(max_length=64, unique=True)
    prize = models.IntegerField()
    language = models.ForeignKey(Language)
    img_path = models.CharField(max_length=128, unique=True)
    teacher = models.ForeignKey(Teacher)


    def __repr__(self):
        return '<User %r>' % (self.title)


class Student(models.Model):

    courses = models.ManyToManyField(Course)
    user = models.OneToOneField(settings.AUTH_USER_MODEL)
    img_path = models.CharField(max_length=128, unique=True)

    def __repr__(self):
        return '<Teacher %s %s >' % (self.name, self.second_name)


class Lesson(models.Model):

    title = models.CharField(max_length=64, unique=True)
    img_path = models.CharField(max_length=128)
    course = models.ForeignKey(Course)

    def __repr__(self):
        return '<Lesson %r>' % (self.title)



