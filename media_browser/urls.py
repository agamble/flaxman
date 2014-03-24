from django.conf.urls import patterns, include, url


urlpatterns = patterns('media_browser.views',
    # Examples:
    url(r'^$', 'browse'),
    url(r'(?P<num>\d+)/', 'single')
)
