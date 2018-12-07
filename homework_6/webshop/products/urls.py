from django.conf.urls import url, include

from views import show_proudcts


urlpatterns = [
    url(r'^/', show_products),
    url(r'^/<int:product>/', show_product_info)

]