from django.urls import path
from . import views

urlpatterns = [
    # CATEGORY ENDPOINTS
    path("categories/", views.CategoryListCreateView.as_view()),
    path("categories/<slug:slug>/", views.CategoryDetailView.as_view()),

    # COURSE ENDPOINTS
    path("courses/", views.CourseListCreateView.as_view()),
    path("courses/<slug:slug>/", views.CourseDetailView.as_view()),

    # LESSON ENDPOINTS
    path("courses/<slug:slug>/lessons/", views.LessonListCreateView.as_view()),
    path("courses/<slug:slug>/lessons/<int:pk>/", views.LessonDetailView.as_view()),

    # ENROLLMENT ENDPOINTS
    path("enrollments/", views.EnrollmentListCreateView.as_view()),
    path("enrollments/<int:pk>/", views.EnrollmentDetailView.as_view()),
]