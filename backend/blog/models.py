from django.db import models
from django.db.models.signals import post_save, post_delete, pre_delete
from django.dispatch import receiver
from uuid import uuid4
import os

def upload_to(instance, filename):
    #拡張子取得
    ext = filename.split(".")[-1]
    #ファイル名としてuuidを生成、元の拡張子を維持
    filename = f"{uuid4()}.{ext}"
    #imageディレクトリに保存されるようにパスを返す
    return f"images/{filename}"

# Create your models here.
class Blog(models.Model):
    title = models.CharField('タイトル', max_length=50)
    date = models.DateField()
    thumbnail = models.ImageField(upload_to=upload_to, null=True, blank=True)
    text = models.TextField()
    url = models.CharField('URL', max_length=100, null=True, blank=True)
    
    def __str__(self):
        post_title = self.title
        return post_title

class Work(models.Model):
    title = models.CharField('タイトル', max_length=50)
    date = models.DateField()
    thumbnail = models.ImageField(upload_to=upload_to)
    text = models.TextField()
    url = models.CharField('URL', max_length=100)
    
    def __str__(self):
        post_title = self.title
        return post_title

@receiver(pre_delete, sender=Blog)
@receiver(pre_delete, sender=Work)
def delete_image(sender, instance, **kwargs):
    #画像が存在する場合は削除
    if instance.thumbnail:
        if os.path.isfile(instance.thumbnail.path):
            os.remove(instance.thumbnail.path)

class Notification(models.Model):
    title = models.CharField('タイトル', max_length=50)
    date = models.DateField()
    category = models.CharField('カテゴリ', max_length=20)

    def __str__(self):
        return self.title

@receiver(post_save, sender=Blog)
def create_blog_post(sender, instance, **kwargs):
    Notification.objects.create(
        title=instance.title,
        date=instance.date,
        category='Blog',  # ブログの場合
    )

@receiver(post_delete, sender=Blog)
def delete_blog_post(sender, instance, **kwargs):
    Notification.objects.filter(title=instance.title, category='Blog').delete()

@receiver(post_save, sender=Work)
def create_work_post(sender, instance, **kwargs):
    Notification.objects.create(
        title=instance.title,
        date=instance.date,
        category='Work',  # ワークの場合
    )

@receiver(post_delete, sender=Work)
def delete_work_post(sender, instance, **kwargs):
    Notification.objects.filter(title=instance.title, category='Work').delete()

class Mail(models.Model):
    name = models.CharField('名前', max_length=50)
    email = models.EmailField('メールアドレス', max_length=100)
    message = models.TextField()
    
    def __str__(self):
        post_name = self.name
        return post_name
