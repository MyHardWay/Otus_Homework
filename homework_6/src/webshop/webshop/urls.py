from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls import handler404, handler500

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^products/', include('products.urls'))

]


handler404 = 'webshop.views.handler404'
handler500 = 'webshop.views.handler500'
