from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.conf import settings
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'flaxman.views.home', name='home'),
    url(r'^about$', 'flaxman.views.about', name='about'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^news/', include('news.urls')),
    url(r'^media/', include('media_browser.urls')),
    url(r'^api/', include('api.urls')),

    url(r'^admin/', include(admin.site.urls)),
    ) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()
