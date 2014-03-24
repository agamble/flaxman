from django.db import models

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateTimeField()
    author = models.CharField(max_length=255)

class Image(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='/news/images/', blank=True)


# Create your models here.
