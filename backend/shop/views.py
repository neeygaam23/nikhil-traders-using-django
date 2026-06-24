from rest_framework import viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.prefetch_related("products").all()
    serializer_class = CategorySerializer
    lookup_field = "slug"


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        qs = Product.objects.select_related("category").all()
        category = self.request.query_params.get("category")
        if category:
            qs = qs.filter(category__slug=category)
        featured = self.request.query_params.get("featured")
        if featured == "true":
            qs = qs.filter(is_featured=True)
        search = self.request.query_params.get("search")
        if search:
            qs = qs.filter(name__icontains=search)
        return qs
