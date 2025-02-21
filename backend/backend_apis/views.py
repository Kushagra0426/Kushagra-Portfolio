from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from backend_apis.utils import send_contact_me_email, send_contact_me_email_greenmindai

# Create your views here.

@csrf_exempt
def contact_me(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            send_contact_me_email(name, email, message)

            return JsonResponse({"message": "Message sent successfully!"}, status=200)
        
        except Exception as e:
            return JsonResponse({"error": e}, status=400)
        
    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def contact_me_greenmind(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            send_contact_me_email_greenmindai(name, email, message)

            return JsonResponse({"message": "Message sent successfully!"}, status=200)
        
        except Exception as e:
            return JsonResponse({"error": e}, status=400)
        
    return JsonResponse({"error": "Invalid request method"}, status=405)
        