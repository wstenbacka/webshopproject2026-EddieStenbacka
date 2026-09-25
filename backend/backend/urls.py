"""
URL configuration for backend project.
"""
from django.contrib import admin
from django.urls import path
from api import views as apiViews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/items/', apiViews.ItemListAPIView.as_view(), name = 'item-list'),
    path('api/items/<int:pk>/', apiViews.ItemDetailAPIView.as_view(), name = 'item-detail'),
]
