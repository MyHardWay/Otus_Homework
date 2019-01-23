import smtplib
from rq import Queue
from redis import Redis
from email.mime.text import MIMEText

redis_conn = Redis()
q = Queue(connection=redis_conn)

def send_email_to_user(user_email):
    msg =  MIMEText('Greeting, you are joins our community')
    msg['Subject'] = 'Welcome message'
    msg['From'] = 'otus@mail.ru'
    msg['To'] = user_email
    s = smtplib.SMTP('localhost')
    s.sendmail('otus@mail.ru', [user_email], msg.as_string())
    s.quit()
