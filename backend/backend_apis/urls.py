from django.urls import path
from . import views

urlpatterns = [
    path('contact-me/', views.contact_me, name="Contact Me"),
    path('contact-me-green/', views.contact_me_greenmind, name="Contact Me Green")
]
