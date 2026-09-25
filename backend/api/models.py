from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=10)
    desc = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)

    seller = models.TextField()

class Cart(models.Model):
    item = models.TextField()

    added_at = models.DateTimeField(auto_now_add=True)

    customer = models.TextField()