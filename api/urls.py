from django.conf.urls import patterns, include, url


urlpatterns = patterns('api.views',
    # Examples:
    url(r'media.json$', 'media_all'),
    # url(r'^/media/(?P<id>\d+).json$', 'media_single'),
    url(r'^playlists.json$', 'playlists_all'),
    url(r'^/playlists/(?P<id>\d+).json$', 'playlists_single'),
    )
