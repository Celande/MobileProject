# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models

# django.db.utils.OperationalError: (1060, "Duplicate column name 'img_id'")

class Image(models.Model):
    path = models.CharField(max_length=255)
    type = models.CharField(max_length=5)
    num = models.IntegerField()
    ext = models.CharField(max_length=4)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'image'


class Breed(models.Model):
    name = models.CharField(unique=True, max_length=255)
    height = models.FloatField()
    weight = models.FloatField()
    color = models.CharField(max_length=255)
    origin = models.CharField(max_length=255)
    hair_growth = models.FloatField(blank=True, null=True)
    milk_by_lactation = models.FloatField(blank=True, null=True)
    duration_of_lactation = models.IntegerField(blank=True, null=True)
    exploitation = models.CharField(max_length=11)
    img = models.ForeignKey(Image, models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False # don't want all the original columns of the db
        db_table = 'breed'
        ordering = ['name']


class Goat(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    birthdate = models.DateField()
    breed = models.ForeignKey(Breed, models.DO_NOTHING)
    gender = models.CharField(max_length=6)
    localisation = models.CharField(max_length=255)
    identification = models.CharField(max_length=255)
    description = models.TextField()
    img = models.ForeignKey(Image, models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return "Goat\n name: {0}\n breed: {1} ".format(self.name, self.breed.name)

    class Meta:
        #managed = False
        db_table = 'goat'
        ordering = ['created_at']
