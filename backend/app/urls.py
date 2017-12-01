from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'), # default page
    url(r'^goats/(?P<goat_id>[0-9]+)', views.goat, name='goat'), # the order is important
    url(r'^goats/', views.goats, name='goats'),
    url(r'^races', views.races, name='races'),
    url(r'^add_goat', views.add_goat, name='add_goat'),
]
