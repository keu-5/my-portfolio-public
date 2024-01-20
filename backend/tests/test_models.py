from django.test import TestCase
from blog.models import Blog
from datetime import date

class BlogModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # テスト用のデータをセットアップ
        Blog.objects.create(
            title='テストブログ',
            date=date(2022, 1, 1),
            text='これはテスト用のブログです。',
            url='test-blog'
        )

    def test_title_max_length(self):
        blog = Blog.objects.get(id=1)
        max_length = blog._meta.get_field('title').max_length
        self.assertEqual(max_length, 50)

    def test_date(self):
        blog = Blog.objects.get(id=1)
        self.assertEqual(blog.date, date(2022, 1, 1))

    def test_text(self):
        blog = Blog.objects.get(id=1)
        self.assertEqual(blog.text, 'これはテスト用のブログです。')

    def test_url(self):
        blog = Blog.objects.get(id=1)
        self.assertEqual(blog.url, 'test-blog')

    def test_str_representation(self):
        blog = Blog.objects.get(id=1)
        self.assertEqual(str(blog), 'テストブログ')

