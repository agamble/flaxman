from django.shortcuts import render
from media_browser.models import Media

# Create your views here.

def browse(request):
	context = {}

	context['media'] = Media.objects.values()[:50]
	return render(request, 'media_browser/browse.html', context)

def single(request):
	context = {}

	return render(request, 'media_browser/browse.html', context)