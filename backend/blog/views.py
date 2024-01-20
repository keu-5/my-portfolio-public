from rest_framework import generics
from .serializers import BlogSerializer, WorkSerializer, NotificationSerializer, MailSerializer
from django.core.mail import send_mail
from django.http import JsonResponse

from .models import Blog, Work, Mail, Notification

class BlogListView(generics.ListAPIView):
    queryset = Blog.objects.all().order_by('-date')
    serializer_class = BlogSerializer

class WorkListView(generics.ListAPIView):
    queryset = Work.objects.all().order_by('-id')
    serializer_class = WorkSerializer

class NotificationListView(generics.ListAPIView):
    queryset = Notification.objects.all().order_by('-date')
    serializer_class = NotificationSerializer

class MailSendView(generics.ListAPIView):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer
    
    def post(self, request, *args, **kwargs):
        subject = request.data.get('name', '')
        message = request.data.get('message', '')
        from_email = request.data.get('email', '')
        recipient_list = ['keu02.78@gmail.com']
        
        instance = Mail(
            name=subject, 
            email=from_email, 
            message=f'{subject}({from_email})よりお問い合わせを受け付けました。\n\n\n{message}'
        )
        instance.save()

        # メールを送信します
        send_mail(subject, f'{subject}({from_email})よりお問い合わせを受け付けました。\n\n\n{message}', from_email, recipient_list, fail_silently=False)
        return JsonResponse({'message': 'Data saved successfully'})

"""
def index(request):
    return render(request, 'index.html', {})
"""
