from django.shortcuts import get_object_or_404
from django.shortcuts import render_to_response

from models import Product


def show_products(request):
    products = get_object_or_404(Product.query.all())
    return render_to_response('products.html', {'products': products})


def show_product_info(request, product_id):
    product_ = get_object_or_404(
        Product.query.filter_by(id=product_id).first())
    return render_to_response('product_info.html', {'product': product_})

