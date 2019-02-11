import unittest
from rest_framework.test import APIClient
from django.conf import settings
import sys
sys.path.append('../')

from homework_7.src.courses_site.entity_information.models import (
    Language, Course, Lesson, Profile)


class TestModels(unittest.TestCase):

    def setUp(self):
        self.course_ = Course.objects.create(title="test_course", prize=130)
        self.basic_user = settings.AUTH_USER_MODEL.objects.create()
        self.profile_ = Profile.objects.create(
            name="test_user", user=self.basic_user, password='test_user')
        self.lesson_ = Lesson.objects.create(
            title="test_lesson", course=self.course_)
        self.language_ = Language.objects.create(title='test_language')
        self.client = APIClient()

    def test_creation(self):
        self.assertTrue(isinstance(self.course_, Course))
        self.assertTrue(isinstance(self.basic_user, settings.AUTH_USER_MODEL))
        self.assertTrue(isinstance(self.profile_, Profile))
        self.assertTrue(isinstance(self.lesson_, Lesson))
        self.assertTrue(isinstance(self.language_, Language))

    def test_create_user_by_api(self):
        response = self.client.post('/register/', {'name': 'test_user2'})
        self.assertTrue(response.status_code == 200)
        response = self.client.post('/register/', {'name': 'test_user2'})
        self.assertTrue(response.status_code == 404)

    def test_get_user_by_api(self):
        response = self.client.get('/api/user/', {'name': self.profile_.name})
        self.assertTrue(response.status_code == 200)
        self.assertTrue(response.data.name == self.profile_.name)

    def test_add_course_to_student_by_api(self):
        response = self.client.post(
            '/api/user/', {'name': 'test_user', 'course': self.course_.id})
        self.assertTrue(response.status_code == 200)
        self.assertTrue(
            self.course_.id in Profile.ordering.get(id=self.course_).id)

    def test_get_course_by_api(self):
        response = self.client.get('/api/', {'course': self.course_.id})
        self.assertTrue(response.status_code == 200)
        self.assertTrue(response.data.id == self.course_.id)

    def test_login(self):
        response = self.client.post(
            '/login/',
            {'name': self.profile__.name, 'password': self.profile_.password})
        self.assertTrue(response.status_code == 200)

    def test_wrong_login(self):
        response = self.client.post(
            '/login/',
            {'name': self.profile__.name, 'password': 'wrong_password'})
        self.assertTrue(response.status_code == 404)

    def tearDown(self):
        self.course_.delete()
        self.basic_user.delete()
        self.profile_.delete()
        self.lesson_.delete()
        self.basic_user.delete()
        self.language_.delete()
        Profile.objects.get(name='test_2').delete()


if __name__ == '__main__':
    unittest.main()
