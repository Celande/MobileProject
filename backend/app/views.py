# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse

from django.shortcuts import render
from .models import Goat

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the app index.")

def goat(request, goat_id):
    #response = "Goat : %s." % goat_id
    goat = Goat.objects.get(id=goat_id)
    #return HttpResponse(query)
    #return HttpResponse(template.render(goat, request))
    goat = {'name': goat.name}
    return render(request, 'goat/goat.html', goat)

def goats(request):
    #response = "Goats"
    query = Goat.objects.all()
    response = " , ".join(goat.name for goat in query)
    return HttpResponse(response)

def races(request):
    return HttpResponse("Races")

def add_goat(request):
    return HttpResponse("Add Goat")
