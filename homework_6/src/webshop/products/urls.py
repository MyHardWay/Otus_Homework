from django.conf.urls import url

from .views import show_products, show_product_info


urlpatterns = [
    url(r'^$', show_products),
    url(r'^(?P<product_id>\w+)/$', show_product_info)

]