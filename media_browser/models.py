from django.db import models
from playlist.models import Playlist 

VIDEO_SOURCES = (
    ('YT', 'YouTube'),
    ('VI', 'Vimeo')
    )

MEDIA_TYPE = (
    ('IM', 'Image'),
    ('VI', 'Video'),
    ('AU', 'Audio'),
    )

class Media(models.Model):
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=2, choices=MEDIA_TYPE)
    author = models.CharField(max_length=255)
    video_source = models.CharField(max_length=2, choices=VIDEO_SOURCES, blank=True)
    video_id = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='media/images/', blank=True)
    audio = models.FileField(upload_to='media/audio/', blank=True)
    playlists = models.ManyToManyField('playlist.Playlist', related_name='playlists_set+', through=Playlist.media.through, blank=True)
    location_in_gallery = models.CharField(max_length=255)
    summary = models.TextField()
    link = models.URLField()
    
    class Meta:
        verbose_name_plural = "media"


class Tags(models.Model):
    tag = models.CharField(max_length=255)
    media = models.ManyToManyField('Media')

class ImageChild(models.Model):
    child = models.ImageField(upload_to='media/images/', blank=True)
    media = models.ForeignKey(Media)
    
    class Meta:
        verbose_name_plural = "Image Children"

