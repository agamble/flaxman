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
    type = models.CharField(max_length=2, choices=MEDIA_TYPE)
    author = models.CharField(max_length=255)
    video_source = models.CharField(max_length=2, choices=VIDEO_SOURCES, blank=True)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='media/images/', blank=True)
    audio = models.FileField(upload_to='media/audio/', blank=True)
    verbose_name_plural = "media"


class Tags(models.Model):
    tag = models.CharField(max_length=255)
    media = models.ManyToManyField('Media')


# Create your models here.
