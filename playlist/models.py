from django.db import models
from orderedmodel import OrderedModel

# Create your models here.
class Playlist(models.Model):
    name = models.CharField(max_length=255)
    header = models.BooleanField()
    media = models.ManyToManyField('media_browser.Media', blank=True)
    def __unicode__(self):
        return self.name
