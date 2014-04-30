from django.contrib import admin

from playlist.models import Playlist

# Register your models here.

class PlaylistAdmin(admin.ModelAdmin):
    list_display = ('name', 'header',)


admin.site.register(Playlist, PlaylistAdmin)