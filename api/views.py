from django.shortcuts import render
from media_browser.models import Media
from media_browser.models import ImageChild
from playlist.models import Playlist
from flaxman.models import *
from django.core import serializers
from django.http import HttpResponse
from django.forms.models import model_to_dict
import json
import itertools
import random

# Create your views here.


def media_all(request):
    media = Media.objects.all().exclude(playlist__name='Homepage').order_by('?')    
    playlists = Playlist.objects.all().exclude(name='Homepage')
    results = list(itertools.chain(media, playlists))
    random.shuffle(results)
    print results
    data = serializers.serialize('json', results)
    return HttpResponse(data, content_type='application/json')

def media_single(request, id):
    media = Media.objects.filter(id=id)
    children = ImageChild.objects.filter(media=id)
    data = serializers.serialize('json', list(itertools.chain(media, children)))
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
    referencedPlaylist = Playlist.objects.filter(id=id)
    MediaQuery = Media.objects.filter(playlist__in=id)

    data = serializers.serialize('json', list(itertools.chain(referencedPlaylist, MediaQuery)))
    return HttpResponse(data, content_type='application/json')

def related_content(request, id):
    context = {}
    playlists = Playlist.objects.filter(media__id=id)
    media = Media.objects.filter(playlist__in=playlists).distinct().exclude(id=id).order_by('?')[:10]
    print media
    data = serializers.serialize('json', media)
    return HttpResponse(data, content_type='application/json')

def get_first(request):
    playlists = Playlist.objects.filter(name='Homepage')
    media = Media.objects.filter(playlist__in=playlists).distinct().order_by('?')
    data = serializers.serialize('json', media)
    return HttpResponse(data, content_type='application/json')

def get_header(request):
    playlists = Playlist.objects.filter(header=True)
    data = serializers.serialize('json', playlists)
    return HttpResponse(data, content_type='application/json')

def get_about_art_museum(request):
    art_gallery = AboutArtGallery.objects.all()[0]
    data = serializers.serialize('json', [art_gallery, ])
    return HttpResponse(data, content_type='application/json')

def get_about_special_collection(request):
    special_collection = AboutSpecialCollection.objects.all()[0]
    data = serializers.serialize('json', [special_collection, ])
    return HttpResponse(data, content_type='application/json')

def get_about_contact(request):
    contact = AboutContact.objects.all()[0]
    data = serializers.serialize('json', [contact, ])
    return HttpResponse(data, content_type='application/json')

def get_about_partners(request):
    partners = AboutPartner.objects.all()
    data = serializers.serialize('json', partners)
    return HttpResponse(data, content_type='application/json')

def get_about_visit(request):
    visit = AboutVisit.objects.all()
    data = serializers.serialize('json', visit)
    return HttpResponse(data, content_type='application/json')
