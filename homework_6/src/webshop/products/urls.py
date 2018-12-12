from django.conf.urls import url

from .views import Product_Info, Products_List


urlpatterns = [
    url(
        r'^(?P<product_id>\w+)/$',
        Product_Info.as_view(), name='product_info'),
    url(r'^$', Products_List.as_view()),


]