from django.shortcuts import render
from django.http import Http404
from media_browser.models import Media
from playlist.models import Playlist

# Create your views here.

def browse(request):
	context = {}

	context['media'] = Media.objects.values()[:50]
	print context['media']
	return render(request, 'media_browser/browse.html', context)

def single(request, id):
	context = {}

	context['media'] = Media.objects.get(id=id)

	playlistQuery = Playlist.objects.filter(media=id)

	context['playlist'] = Media.objects.filter(playlist__in=playlistQuery).distinct().values()

	if context['media']:
		return render(request, 'media_browser/single.html', context)
	raise Http404