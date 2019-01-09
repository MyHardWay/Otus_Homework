from django.contrib import admin

from .models import Teacher, Course, Lesson, Student, Language


admin.site.register([Teacher, Course, Lesson, Student, Language])
