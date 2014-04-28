from django.db import models
from playlist.models import Playlist 
from tinymce.models import HTMLField

class AboutArtGallery(models.Model):
    text = HTMLField()
    title = models.CharField(max_length=255)
    class Meta:
        verbose_name_plural = "Art Gallery"
        verbose_name = "Art Gallery"


class AboutContact(models.Model):
    text = HTMLField()
    title = models.CharField(max_length=255)
    class Meta:
        verbose_name_plural = "Contact"
        verbose_name = "Contact"


class AboutSpecialCollection(models.Model):
    text = HTMLField()
    image = models.ImageField(upload_to='media/about/')
    title = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Special Collection"
        verbose_name = "Special Collection"


class AboutPartner(models.Model):
    name = models.CharField(max_length=255)
    description = HTMLField()
    logo = models.ImageField(upload_to='about/', blank=True)
    title = models.CharField(max_length=255)


    class Meta:
        verbose_name_plural = "Partners"
        verbose_name = "Partner"

class AboutVisit(models.Model):
    description = HTMLField()
    artworks_map = models.FileField(upload_to='about/', blank=True)

    class Meta:
        verbose_name_plural = "Visit"
        verbose_name = "Visit"
