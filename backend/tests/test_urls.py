from django.test import TestCase
from django.urls import reverse, resolve
from blog.views import BlogListView, WorkListView, MailSendView, RecentActionsAPIView, index

class TestUrls(TestCase):
    def test_blogList_url(self):
        url = reverse('appname:blog-model-list')
        self.assertEqual(resolve(url).func.view_class, BlogListView)

    def test_workList_url(self):
        url = reverse('appname:work-model-list')
        self.assertEqual(resolve(url).func.view_class, WorkListView)

    def test_mailSend_url(self):
        url = reverse('appname:send-mail')
        self.assertEqual(resolve(url).func.view_class, MailSendView)

    def test_recentAction_url(self):
        url = reverse('appname:recent-actions-api')
        self.assertEqual(resolve(url).func.view_class, RecentActionsAPIView)

    def test_index_url(self):
        url = reverse('appname:index')
        self.assertEqual(resolve(url).func, index)

