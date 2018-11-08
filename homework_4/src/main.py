from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from extensions import db
from models import Product
from views import products_pages


def register_extensions(app):
    app.app_context().push()
    db.init_app(app)


def add_blueprints(app):
    app.register_blueprint(products_pages)


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    register_extensions(app)
    add_blueprints(app)
    db.create_all()
    return app


if __name__ == '__main__':
    app = create_app('config')
    app.run(debug=True)
