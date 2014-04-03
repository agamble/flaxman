from django.shortcuts import render
from media_browser.models import Media
from playlist.models import Playlist
from django.core import serializers
from django.http import HttpResponse
import json

# Create your views here.


def media_all(request):
    media = Media.objects.all()

    data = serializers.serialize('json', media)
    return HttpResponse(data, content_type='application/json')

def media_single(request, id):
    media = Media.objects.get(id=id)

    data = serializers.serialize('json', media)
    return HttpResponse(data, content_type='application/json')


def playlists_all(request):
    context = {}
    PlaylistQuery = Playlist.objects.all().prefetch_related('media')

    context['playlists'] = list(PlaylistQuery.values())

    for i, p in enumerate(PlaylistQuery):
        print i
        context['playlists'][i]['media'] = list(p.media.all().values())
  
    print context['playlists']

    for p in context['playlists']:
        for m in p['media']:
            m['date'] = m['date'].isoformat()

    return HttpResponse(json.dumps(context), content_type='application/json')

def playlists_single(request, id):
    context = {}
    PlaylistQuery = Playlist.objects.get(id=id).prefetch_related('media')

    context['playlists'] = list(PlaylistQuery)

    context['playlists'][0]['media'] = list(PlaylistQuery.media.all())
