from django.db import models
from playlist.models import Playlist 
from tinymce.models import HTMLField


VIDEO_SOURCES = (
    ('VI', 'Vimeo'),
    )

MEDIA_TYPE = (
    ('IM', 'Image'),
    ('VI', 'Video'),
    ('AU', 'Audio'),
    ('TX', 'Text')
    )

class Media(models.Model):
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=2, choices=MEDIA_TYPE)
    author = models.CharField(max_length=255)
    video_source = models.CharField(max_length=2, default='VI', choices=VIDEO_SOURCES, blank=True)
    video_id = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    date = models.DateField()
    image = models.ImageField(upload_to='media/images/', blank=True)
    thumbnail = models.ImageField(upload_to='media/images/', blank=True)
    image_caption = HTMLField(blank=True)
    audio = models.FileField(upload_to='media/audio/', blank=True)
    playlists = models.ManyToManyField('playlist.Playlist', related_name='playlists_set+', through=Playlist.media.through, blank=True)
    location_in_gallery = models.CharField(max_length=255)
    location_in_brochure = models.IntegerField(max_length=255)
    link_to_geo_location = models.URLField(max_length=255)
    summary = models.TextField(blank=True)
    link = models.URLField()
    
    class Meta:
        verbose_name_plural = "media"
    def __unicode__(self):
        return self.title


class ImageChild(models.Model):
    child = models.ImageField(upload_to='media/images/', blank=True)
    media = models.ForeignKey(Media)
    image_caption = HTMLField()

    
    class Meta:
        verbose_name_plural = "Image Children"

