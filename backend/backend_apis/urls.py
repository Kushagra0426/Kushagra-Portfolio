from django.urls import path
from . import views

urlpatterns = [
    path('contact-me/', views.contact_me, name="Contact Me"),
]
