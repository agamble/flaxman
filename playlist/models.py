from django.db import models
from orderedmodel import OrderedModel

# Create your models here.
class Playlist(OrderedModel):
	name = models.CharField(max_length=255)
	media = models.ManyToManyField('media_browser.Media', related_name='media+', blank=True)