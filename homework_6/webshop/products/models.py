from django.db import models


class Product(models.Model):

    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64, unique=True)
    prize = models.IntegerField(index=True)
    manufacter = models.IntegerField()
    weight = models.IntegerField()
    filepath = models.CharField(max_length=128, unique=True)

    def __repr__(self):
        return '<User %r>' % (self.nickname)
