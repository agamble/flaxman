# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Playlist.header'
        db.add_column(u'playlist_playlist', 'header',
                      self.gf('django.db.models.fields.BooleanField')(default=False),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Playlist.header'
        db.delete_column(u'playlist_playlist', 'header')


    models = {
        u'media_browser.media': {
            'Meta': {'object_name': 'Media'},
            'audio': ('django.db.models.fields.files.FileField', [], {'max_length': '100', 'blank': 'True'}),
            'author': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'date': ('django.db.models.fields.DateField', [], {}),
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.ImageField', [], {'max_length': '100', 'blank': 'True'}),
            'link': ('django.db.models.fields.URLField', [], {'max_length': '200'}),
            'location_in_gallery': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'playlists': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'related_name': "'playlists_set+'", 'blank': 'True', 'to': u"orm['playlist.Playlist']"}),
            'summary': ('django.db.models.fields.TextField', [], {}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'type': ('django.db.models.fields.CharField', [], {'max_length': '2'}),
            'video_id': ('django.db.models.fields.CharField', [], {'max_length': '255', 'blank': 'True'}),
            'video_source': ('django.db.models.fields.CharField', [], {'max_length': '2', 'blank': 'True'})
        },
        u'playlist.playlist': {
            'Meta': {'ordering': "['order']", 'object_name': 'Playlist'},
            'header': ('django.db.models.fields.BooleanField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'media': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['media_browser.Media']", 'symmetrical': 'False', 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'order': ('django.db.models.fields.PositiveIntegerField', [], {'unique': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['playlist']