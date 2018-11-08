from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
from models import Product

products_pages = Blueprint(
    'products', __name__, template_folder='templates', static_folder='static'
    )


@products_pages.route('/products')
def main():
    products = Product.query.all()
    return render_template('products.html', products=products)


@products_pages.route('/products/<product_id>')
def show_product_info(product_id):
    product_ = Product.query.filter_by(id=product_id).first()
    return render_template('product_info.html', product=product_)
