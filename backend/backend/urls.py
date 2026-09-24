"""
URL configuration for backend project.
"""
from django.contrib import admin
from django.urls import path
from api import views as apiViews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/cards/', apiViews.CardListAPIView.as_view(), name = 'card-list'),
    path('api/cards/<int:pk>/', apiViews.CardDetailAPIView.as_view(), name = 'card-detail'),
]
