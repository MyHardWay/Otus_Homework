from django.contrib import admin

from .models import Course, Lesson, Language


admin.site.register([Course, Lesson, Language])

