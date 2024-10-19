"""biz499dotin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from main.views import index,about,contact,digimar,ecomm,wordpress,designers,insurat,inahem,inbaro,graphicsinsurat,weddinggraphics,jobsinsurat,submit_contact_form



urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name='home'),
    path('about/',about,name='about'),
    path('contact/',contact,name='contact'),
    path('digital-marketing-agency-in-surat/',digimar,name='digimar'),
    path('ecommerce-development-company/',ecomm,name='ecomm'),
    path('wordpress-development-company/',wordpress,name='wordpress'),
    path('website-design-company/',designers,name='designers'),
    path('website-designers-in-surat/',insurat,name='insurat'),
    path('graphics-designers-in-surat/',graphicsinsurat,name='graphicsinsurat'),
    path('wedding-graphics/',weddinggraphics,name='weddinggraphics'),
    path('jobs-in-surat/',jobsinsurat,name='jobsinsurat'),
    path('website-designers-in-ahemdabad/',inahem,name='inahem'),
    path('website-designers-in-baroda/',inbaro,name='inbaro'),
    path('submit-contact-form/', submit_contact_form, name='submit_contact_form'),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)