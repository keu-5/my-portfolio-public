from django.db.models import fields
from rest_framework import serializers
from .models import Blog, Work, Mail, Notification
from django.contrib.admin.models import LogEntry, ContentType

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ("id" ,'title', 'date', 'thumbnail', 'text', 'url',)

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('title', 'thumbnail', 'text', 'url',) 

class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mail
        fields = ('name', 'email', 'message',)

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('title', 'date', 'category')
