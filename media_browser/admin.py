from django.contrib import admin
from media_browser.models import *

class RelatedChildrenInline(admin.TabularInline):
    model = ImageChild
    extra = 1
    

class MediaAdmin(admin.ModelAdmin):
    list_display = ('title', 'type',)
    fieldsets = (
        (None, {
            'fields': ('title', 'type', 'description', 'date', 'playlists', 'location_in_gallery', 'location_in_brochure', 'link', 'thumbnail', )
            }),
        ('Video', {
            'fields': ('video_id',),
            'classes': ('collapse',)
            }),
        ('Audio', {
            'fields': ('audio',),
            'classes': ('collapse',)
            }),
        ('Image', {
            'fields': ('image', 'image_caption',),
            'classes': ('collapse',)
            }),
        ('Text', {
            'fields': ('summary',),
            'classes': ('collapse',)
            }),
        )   
    verbose_name_plural = "media"
    inlines = [RelatedChildrenInline, ]

admin.site.register(Media, MediaAdmin)

# Register your models here.


