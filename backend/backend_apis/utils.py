from portfolio_backend.settings import CONTACT_ME_EMAIL_TEMPLATE
from django.core.mail import send_mail
from django.template import Template, Context
from django.utils.html import format_html

def send_contact_me_email(name, email, message):
    subject = 'Contact Request'
    html_template = CONTACT_ME_EMAIL_TEMPLATE

    template = Template(html_template)

    context = Context({
        'name': name,
        'email': email,
        'message': message
    })

    html_message = format_html(template.render(context))

    receipient_list = ['kushagrasaxena0426@gmail.com']
    send_mail(subject, None, None, receipient_list, html_message=html_message)