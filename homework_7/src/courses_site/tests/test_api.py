from django.test import TestCase
from django.contrib.auth.models import User

from rest_framework.test import APIClient

from django.core.urlresolvers import reverse
from entity_information.models import (
    Language, Course, Lesson, Profile)


class TestAuth(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.basic_user = User.objects.create(
            username="test_user", password='test_user')
        self.profile_ = Profile.objects.create(user=self.basic_user)

    def test_creation(self):
        self.assertTrue(User.objects.filter(username='test_user').exists())
        self.assertTrue(User.objects.filter(user=self.basic_user).exists())

    def test_login(self):
        response = self.client.post(reverse('login'),
                                    {'username': 'test_user',
                                     'password': 'test_user'})
        self.assertTrue(response.status_code == 200)

    def test_wrong_login(self):
        response = self.client.post(
            reverse('login'),
            {'username': 'test_user', 'password': 'wrong_password'})
        self.assertTrue(response.status_code == 404)

    def test_registration(self):
        response = self.client.post(
            reverse('register'), {'name': 'test_user2'})
        self.assertTrue(response.status_code == 200)
        response = self.client.post(
            reverse('register'), {'name': 'test_user2'})
        self.assertTrue(response.status_code == 404)

    def tearDown(self):
        base_user = User.objects.get(username='test_user')
        User.objects.get(username='test_user').delete()
        Profile.objects.get(user=base_user).delete()


class TestCourse(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.course_ = Course.objects.create(
            title="test_course1", prize=130, img_path='/',id=3)

    def test_creation(self):
        self.assertTrue(Course.objects.filter(title="test_course1").exists())

    def test_get_api(self):
        response = self.client.get(reverse('course', args=[3]))
        self.assertTrue(response.status_code == 200)

    def tearDown(self):
        Course.objects.get(title="test_course1").delete()


class TestLanguage(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.language_ = Language.objects.create(title='test_language')

    def test_creation(self):
        self.assertTrue(Course.objects.filter(title='test_language').exists())

    def tearDown(self):
        Language.objects.get(title='test_language').delete()


class TestLessons(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.lesson_ = Lesson.objects.create(
            title="test_lesson")

    def test_creation(self):
        self.assertTrue(Lesson.objects.filter(title='test_lesson').exists())

    def tearDown(self):
        Language.objects.get(title='test_lesson').delete()
