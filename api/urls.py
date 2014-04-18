from django.conf.urls import patterns, include, url


urlpatterns = patterns('api.views',
    # Examples:
    url(r'media.json$', 'media_all'),
    url(r'media/(?P<id>\d+).json$', 'media_single'),
    url(r'media/first.json$', 'get_first'),
    url(r'media/related/(?P<id>\d+).json$', 'related_content'),
    url(r'playlists.json$', 'playlists_all'),
    url(r'playlists/header.json$', 'get_header'),
    url(r'playlists/(?P<id>\d+).json$', 'playlists_single'),

    url(r'about/artmuseum.json$', 'get_about_art_museum'),
    url(r'about/contact.json$', 'get_about_contact'),
    url(r'about/specialcollection.json$', 'get_about_special_collection'),
    url(r'about/partners.json$', 'get_about_partners'),
    url(r'about/visit.json$', 'get_about_visit'),
    )
    