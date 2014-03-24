from django.shortcuts import render


def home(request):

	return render(request, 'flaxman/index.html', {})

def about(request):
	return render(request, 'flaxman/index.html', {})