from django.db import models

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
    type = models.CharField(max_length=2, choices=MEDIA_TYPE, help_text='This field is not necessary if you are not specifying the video media type')
    author = models.CharField(max_length=255)
    video_source = models.CharField(max_length=2, choices=VIDEO_SOURCES, blank=True)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='media/images/', blank=True)
    audio = models.FileField(upload_to='media/audio/', blank=True)
    verbose_name_plural = "media"


class Tags(models.Model):
    media = models.ForeignKey('Media')
    tag = models.CharField(max_length=255)
    
# Create your models here.
