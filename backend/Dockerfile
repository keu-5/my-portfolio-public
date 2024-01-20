FROM python:3.12.0

WORKDIR /app

COPY ./backend /app

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "migrate"]
CMD ["gunicorn", "-b", "0.0.0.0:8000", "blog_api.wsgi:application"]

