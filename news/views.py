from django.shortcuts import render

def news(request):
	context = {}

	context['news'] = News.objects.all().values()
	
	return render(request, 'news/news.html', context)