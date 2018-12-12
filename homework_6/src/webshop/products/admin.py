from django.contrib import admin

from .models import Product


class OtusAdmin(admin.ModelAdmin):
    pass


admin.site.register(Product, OtusAdmin)
