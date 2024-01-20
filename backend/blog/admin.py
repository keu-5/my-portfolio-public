from django.contrib import admin
from .models import Blog, Work, Mail, Notification

admin.site.register(Blog)
admin.site.register(Work)
admin.site.register(Notification)
admin.site.register(Mail)
