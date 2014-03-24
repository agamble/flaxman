from django.contrib import admin
from media_browser.models import *

class MediaAdmin(admin.ModelAdmin):
	fieldsets = (
		(None, {
			'fields': ('title', 'type', 'description', 'author', 'date',)
			}),
		('Video', {
			'fields': ('video_source',),
			'classes': ('collapse',)
			}),
		('Audio', {
			'fields': ('audio',),
			'classes': ('collapse',)
			}),
		('Image', {
			'fields': ('image',),
			'classes': ('collapse',)
			}),
		)

admin.site.register(Media, MediaAdmin)

# Register your models here.


