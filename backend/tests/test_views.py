from django.test import TestCase

class TestAccessView(TestCase):
    def test_homeList_view(self):
        response = self.client.get('')
        self.assertEqual(response.status_code, 200)

    def test_blogList_view(self):
        response = self.client.get('/blog/')
        self.assertEqual(response.status_code, 200)

    def test_workList_view(self):
        response = self.client.get('/work/')
        self.assertEqual(response.status_code, 200)

    def test_mailList_view(self):
        response = self.client.get('/mail/')
        self.assertEqual(response.status_code, 200)

    def test_recentActionList_view(self):
        response = self.client.get('/recent-actions/')
        self.assertEqual(response.status_code, 200)
