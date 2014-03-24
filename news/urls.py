from django.conf.urls import patterns, include, url

urlpatterns = patterns('news.views',

    url(r'^$', 'news', name='news'),

)
