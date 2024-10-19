from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from .models import ContactFormEntry

@require_POST
def submit_contact_form(request):
    if 'submit_modal' in request.POST:
        name = request.POST.get('name')
        phone = request.POST.get('phone', '') # Optional
        email = request.POST.get('email', '')  # Optional
        budget = request.POST.get('budget', '')  # Optional
        business_type = request.POST.get('business_type', '')  # Optional


        ContactFormEntry.objects.create(name=name, email=email, phone=phone, business_type=business_type, budget=budget)
        # Set a session variable upon successful form submission
        request.session['form_submitted'] = True
        return redirect('home')  # Redirect to a success page or home
    
    if 'submit_contact' in request.POST:
        name = request.POST.get('name')
        email = request.POST.get('email', '')  # Optional
        phone = request.POST.get('budget')
        budget = request.POST.get('budget', '')  # Optional
        business_type = request.POST.get('business_type', '')  # Optional

        ContactFormEntry.objects.create(name=name, email=email, phone=phone, business_type=business_type, budget=budget)
        # Set a session variable upon successful form submission
        request.session['form_submitted'] = True
        return redirect('home')  # Redirect to a success page or home

# Create your views here.
def index(request):
    # Check if the form was submitted and clear the session variable
    form_submitted = request.session.pop('form_submitted', False)
    return render(request, 'index.html', {'form_submitted': form_submitted,'page_title': 'Home'})
def about(request):
    return render(request, 'about.html', {'page_title': 'About Us'})

def contact(request):
    return render(request, 'contact.html', {'page_title': 'Contact'})

def digimar(request):
    return render(request, 'digital-marketing-company.html', {'page_title': 'Digital Marketing Company'})

def ecomm(request):
    return render(request, 'ecommerce-website-designers.html', {'page_title': 'Ecommerce Website Designers'})

def wordpress(request):
    return render(request, 'wordpress-website-development.html', {'page_title': 'WordPress Website Development'})

def designers(request):
    return render(request, 'website_designers.html', {'page_title': 'Website Designers'})

def insurat(request):
    return render(request, 'website-design-company-in-surat.html', {'page_title': 'Website Design Company in Surat'})

def graphicsinsurat(request):
    return render(request, 'graphics-design-company-in-surat.html', {'page_title': 'Graphics Design Company in Surat'})

def weddinggraphics(request):
    return render(request, 'wedding-graphics.html', {'page_title': 'Wedding Graphics'})

def jobsinsurat(request):
    return render(request, 'jobs-in-surat.html', {'page_title': 'Jobs in Surat'})

def inahem(request):
    return render(request, 'website-design-company-in-Ahemdabad.html', {'page_title': 'Website Design Company in Ahemdabad'})

def inbaro(request):
    return render(request, 'website-design-company-in-baroda.html', {'page_title': 'Website Design Company in Baroda'})