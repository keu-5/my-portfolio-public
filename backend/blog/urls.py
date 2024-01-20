from django.urls import path
from .views import BlogListView, WorkListView, NotificationListView, MailSendView #, index

app_name = 'appname' #NOTE: 名前空間のつけ方

#NOTE: cd backend -> python manage.py runserver -> /blog(work)/
urlpatterns = [
    # path('', index, name='index'),
    path('blog/', BlogListView.as_view(), name='blog-model-list'),
    path('work/', WorkListView.as_view(), name='work-model-list'),
    path('notification/', NotificationListView.as_view(), name='notification-model-list'),
    path('mail/', MailSendView.as_view(), name='send-mail'),
]
