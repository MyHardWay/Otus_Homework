from django.shortcuts import get_object_or_404
from django.shortcuts import render_to_response
from django.views.generic import ListView, DetailView

from .models import Product

class Products_List(ListView):

    model = Product

    context_object_name = 'products'

    template_name = 'products.html'

    allow_empty = False

    def get_queryset(self):
        qs = Product.objects.all()
        return qs


class Product_Info(DetailView):

    model = Product

    template_name = 'product_info.html'

    context_object_name = 'product'

    pk_url_kwarg = "product_id"
