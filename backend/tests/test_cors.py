from django.test import Client, TestCase

class CORSTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_allowed_origin(self):
        response = self.client.get('http://127.0.0.1/blog/', HTTP_ORIGIN = 'http://localhost:3000')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Access-Control-Allow-Origin', response.headers)

    # NOTE: 「リクエストは拒否された」というレスポンスが成功
    def test_disallowed_origin(self):
        response = self.client.get('http://127.0.0.1/blog/', HTTP_ORIGIN = 'http://localhost:4000')
        self.assertEqual(response.status_code, 200)
        self.assertNotIn('Access-Control-Allow-Origin', response.headers)
