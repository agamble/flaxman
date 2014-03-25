from django.contrib import admin
from orderedmodel import OrderedModelAdmin

from playlist.models import Playlist

# Register your models here.

class PlaylistAdmin(OrderedModelAdmin):
	list_display = ['media', 'reorder']


admin.site.register(Playlist, PlaylistAdmin)