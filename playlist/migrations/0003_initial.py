# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Playlist'
        db.create_table(u'playlist_playlist', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('header', self.gf('django.db.models.fields.BooleanField')()),
        ))
        db.send_create_signal(u'playlist', ['Playlist'])

        # Adding M2M table for field media on 'Playlist'
        m2m_table_name = db.shorten_name(u'playlist_playlist_media')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('playlist', models.ForeignKey(orm[u'playlist.playlist'], null=False)),
            ('media', models.ForeignKey(orm[u'media_browser.media'], null=False))
        ))
        db.create_unique(m2m_table_name, ['playlist_id', 'media_id'])


    def backwards(self, orm):
        # Deleting model 'Playlist'
        db.delete_table(u'playlist_playlist')

        # Removing M2M table for field media on 'Playlist'
        db.delete_table(db.shorten_name(u'playlist_playlist_media'))


    models = {
        u'media_browser.media': {
            'Meta': {'object_name': 'Media'},
            'audio': ('django.db.models.fields.files.FileField', [], {'max_length': '100', 'blank': 'True'}),
            'author': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'date': ('django.db.models.fields.DateField', [], {}),
            'description': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.ImageField', [], {'max_length': '100', 'blank': 'True'}),
            'image_caption': ('tinymce.models.HTMLField', [], {'blank': 'True'}),
            'link': ('django.db.models.fields.URLField', [], {'max_length': '200'}),
            'link_to_geo_location': ('django.db.models.fields.URLField', [], {'max_length': '255'}),
            'location_in_brochure': ('django.db.models.fields.IntegerField', [], {'max_length': '255'}),
            'location_in_gallery': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'playlists': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'related_name': "'playlists_set+'", 'blank': 'True', 'to': u"orm['playlist.Playlist']"}),
            'summary': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'thumbnail': ('django.db.models.fields.files.ImageField', [], {'max_length': '100', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'type': ('django.db.models.fields.CharField', [], {'max_length': '2'}),
            'video_id': ('django.db.models.fields.CharField', [], {'max_length': '255', 'blank': 'True'}),
            'video_source': ('django.db.models.fields.CharField', [], {'default': "'VI'", 'max_length': '2', 'blank': 'True'})
        },
        u'playlist.playlist': {
            'Meta': {'object_name': 'Playlist'},
            'header': ('django.db.models.fields.BooleanField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'media': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['media_browser.Media']", 'symmetrical': 'False', 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        }
    }

    complete_apps = ['playlist']