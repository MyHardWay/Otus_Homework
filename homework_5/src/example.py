import sqlite3

from model import  Base


conn = sqlite3.connect('db')
cur = conn.cursor()


class User(models.Base):
    __tablename__ = 'users'

    id = ('int', 'required')
    username = ('char(256)', 'not_required')


class Posts(models.Base):
    __tablename__ = 'posts'

    id = ('int', 'required')
    postname = ('char(256)', 'not_required')
    user_id = ('int', 'required')

    __relationships__ = (('user_id', 'users', 'id'),)


print(Posts(conn=1, lazy=True, id=1).select())
print((User(username='asd', conn=1, lazy=False).update(id='123', username='das')))
print(models.Base.create_table(Posts))
print(models.Base.drop_table())
print(User.update(id='123', username='das'))
print(User.insert(id='1', username='das'))
print(User.select('id'))
