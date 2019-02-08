import smtplib

from django.conf import settings
from rq import Queue
from redis import Redis
from email.mime.text import MIMEText

redis_conn = Redis()
q = Queue(connection=redis_conn)


def send_email_to_user(user_email):
    if user_email:
        msg = MIMEText('Greeting, you are joins our community')
        msg['Subject'] = 'Welcome message'
        msg['From'] = settings.DEFAULT_EMAIL_FROM
        msg['To'] = user_email
        s = smtplib.SMTP(settings.EMAIL_HOST)
        s.sendmail(settings.DEFAULT_EMAIL_FROM, [user_email], msg.as_string())
        s.quit()
        return True
    return False
