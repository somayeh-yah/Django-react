from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from api import serializer as api_serializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status, permissions
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
import secrets
from userauths.models import User, Profile



# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = api_serializer.MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = api_serializer.RegisterSerializer

def generate_randomly_one_time_password(length=7):
    return "".join([str(secrets.randbelow(10)) for _ in range(length)])


class PasswordResetEmailVerifyAPIView(generics.RetrieveAPIView):
        permission_classes = [AllowAny]
        serializer_class = api_serializer.UserSerializer

        def get_object(self):
            email = self.kwargs['email']
            user = User.objects.filter(email=email).first()

            if not user:
                raise NotFound("No account found with that email address.")

            uidb64 = user.pk
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh.access_token)
            user.otp = generate_randomly_one_time_password()
            user.save()

            frontend_url = settings.FRONTEND_URL
            link = f"{frontend_url}/create-new-password/?otp={user.otp}&uidb64={uidb64}&refresh_token={refresh_token}"

            context = {
                "link": link,
                "username": user.username,
            }

            subject = "Password reset email"
            text_body = render_to_string("email/password_reset.txt", context)
            html = render_to_string("email/password_reset.html", context)

            email_msg = EmailMultiAlternatives(
                subject=subject,
                from_email=settings.FROM_EMAIL,
                to=[user.email],
                body=text_body,
            )

            email_msg.attach_alternative(html, "text/html")
            email_msg.send()

            return user

#we define a new API view that inherits data from generics.CreateAPIView, for creating a new password for a user             
class PasswordChangeAPIView(generics.CreateAPIView):
     permission_classes = [AllowAny] # AllowAny means that any user can access this view
     serializer_class = api_serializer.UserSerializer

     def create(self, request, *args, **kwargs):
          otp = request.data.get('otp')
          uidb64 = request.data.get('uidb64')
          password = request.data.get('password')

          try:
              user = User.objects.get(id=uidb64, otp=otp)
          except (User.DoesNotExist, ValueError, TypeError):
              return Response("Invalid or expired reset link.", status=status.HTTP_400_BAD_REQUEST)

          user.set_password(password)
          user.otp = ""
          user.save()

          return Response("Password changed successfully.", status=status.HTTP_200_OK)


class ProfileUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = api_serializer.ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user.profile
          
                