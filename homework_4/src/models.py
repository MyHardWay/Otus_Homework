from extensions import db


class Product(db.Model):
    def __init__(self, id, name, prize, manufacter, weight, filepath):
        self.id = id
        self.name = name
        self.prize = prize
        self.manufacter = manufacter
        self.weight = weight
        self.filepath = filepath

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    prize = db.Column(db.SmallInteger, index=True)
    manufacter = db.Column(db.SmallInteger)
    weight = db.Column(db.SmallInteger)
    filepath = db.Column(db.String(128), unique=True)

    def __repr__(self):
        return '<User %r>' % (self.nickname)
