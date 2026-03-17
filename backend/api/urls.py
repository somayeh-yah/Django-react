from api import views as api_views
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

# API URLS
urlpatterns = [
    # USER/AUTH ENDPOINTS
    path("user/token/", api_views.MyTokenObtainPairView.as_view()),
    path("user/token/refresh/", TokenRefreshView.as_view()),
    path("user/register/", api_views.RegisterView.as_view()),
    path("user/password-reset/<email>/", api_views.PasswordResetEmailVerifyAPIView.as_view()),
    path("user/password-change/", api_views.PasswordChangeAPIView.as_view()),
    path("user/profile/update/", api_views.ProfileUpdateView.as_view()),

     # COURSES 
    path("", include("courses.urls")),
]