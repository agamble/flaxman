from django.contrib import admin
from flaxman.models import *

class AboutArtGalleryAdmin(admin.ModelAdmin):
    pass
class AboutContactAdmin(admin.ModelAdmin):
    pass
class AboutSpecialCollectionAdmin(admin.ModelAdmin):
    pass
class AboutPartnerAdmin(admin.ModelAdmin):
    pass

admin.site.register(AboutArtGallery, AboutArtGalleryAdmin)
admin.site.register(AboutContact, AboutContactAdmin)
admin.site.register(AboutSpecialCollection, AboutSpecialCollectionAdmin)
admin.site.register(AboutPartner, AboutPartnerAdmin)
admin.site.register(AboutVisit)