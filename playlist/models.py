from django.db import models

# Create your models here.
class Playlist(models.Model):
    name = models.CharField(max_length=255)
    summary = models.CharField(max_length=255, blank=True)
    header = models.BooleanField()
    media = models.ManyToManyField('media_browser.Media', blank=True)
    def __unicode__(self):
        return self.name
