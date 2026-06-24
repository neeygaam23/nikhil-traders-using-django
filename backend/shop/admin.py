from django.contrib import admin
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    list_display = ["name", "order"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "category", "price", "in_stock", "is_featured"]
    list_filter = ["category", "in_stock", "is_featured"]
    search_fields = ["name", "description"]
    list_editable = ["is_featured"]
