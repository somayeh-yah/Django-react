from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils.text import slugify
from .models import Category, Course, Lesson, Enrollment
from .serializers import CategorySerializer, CourseSerializer, LessonSerializer, EnrollmentSerializer
from api.permissions import IsEmployee, IsManager, IsAdmin, IsManagerOrAdmin

# Create your views here.

# CATEGORY 
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsManagerOrAdmin()]  # ONLY MANAGERS AND ADMINS CAN CREATE CATEGORIES
        return [IsAuthenticated()]       # ALL AUTHENTICATED USERS CAN LIST CATEGORIES


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = "slug"
    permission_classes = [IsManagerOrAdmin]  # ONLY MANAGERS AND ADMINS CAN EDIT/DELETE


#  COURSE 
class CourseListCreateView(generics.ListCreateAPIView):
    serializer_class = CourseSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsManagerOrAdmin()]  # ONLY MANAGERS AND ADMINS CAN CREATE COURSES
        return [IsAuthenticated()]       # ALL AUTHENTICATED USERS CAN LIST COURSES

    def get_queryset(self):
        # ONLY SHOW PUBLISHED COURSES TO EMPLOYEES
        if self.request.user.role == "employee":
            return Course.objects.filter(status="published")
        # MANAGERS AND ADMINS SEE ALL COURSES INCLUDING DRAFTS
        return Course.objects.all()

    def perform_create(self, serializer):
        # AUTOMATICALLY SET THE CREATOR AND GENERATE SLUG
        title = serializer.validated_data.get("title", "")
        slug = slugify(title)
        serializer.save(created_by=self.request.user, slug=slug)


class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseSerializer
    lookup_field = "slug"

    def get_permissions(self):
        if self.request.method == "GET":
            return [IsAuthenticated()]       # ALL AUTHENTICATED USERS CAN VIEW A COURSE
        return [IsManagerOrAdmin()]          # ONLY MANAGERS AND ADMINS CAN EDIT/DELETE

    def get_queryset(self):
        if self.request.user.role == "employee":
            return Course.objects.filter(status="published")
        return Course.objects.all()


#  LESSON 
class LessonListCreateView(generics.ListCreateAPIView):
    serializer_class = LessonSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsManagerOrAdmin()]  # ONLY MANAGERS AND ADMINS CAN CREATE LESSONS
        return [IsAuthenticated()]       # ALL AUTHENTICATED USERS CAN LIST LESSONS

    def get_queryset(self):
        # ONLY RETURN LESSONS FOR THE SPECIFIC COURSE
        course_slug = self.kwargs.get("slug")
        return Lesson.objects.filter(course__slug=course_slug)

    def perform_create(self, serializer):
        # AUTOMATICALLY CONNECT LESSON TO THE CORRECT COURSE
        course_slug = self.kwargs.get("slug")
        course = Course.objects.get(slug=course_slug)
        serializer.save(course=course)


class LessonDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LessonSerializer
    lookup_field = "id"

    def get_permissions(self):
        if self.request.method == "GET":
            return [IsAuthenticated()]
        return [IsManagerOrAdmin()]

    def get_queryset(self):
        course_slug = self.kwargs.get("slug")
        return Lesson.objects.filter(course__slug=course_slug)


#  ENROLLMENT 
class EnrollmentListCreateView(generics.ListCreateAPIView):
    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # EMPLOYEES ONLY SEE THEIR OWN ENROLLMENTS
        if self.request.user.role == "employee":
            return Enrollment.objects.filter(user=self.request.user)
        # MANAGERS AND ADMINS SEE ALL ENROLLMENTS
        return Enrollment.objects.all()

    def perform_create(self, serializer):
        # AUTOMATICALLY SET THE USER AND ENROLLMENT TYPE
        assigned_by = None
        enrollment_type = "self"

        # IF A MANAGER ASSIGNS THE COURSE SET ASSIGNED BY
        if self.request.user.role in ["manager", "admin"]:
            enrollment_type = "assigned"
            assigned_by = self.request.user

        serializer.save(
            user=self.request.user,
            enrollment_type=enrollment_type,
            assigned_by=assigned_by,
        )


class EnrollmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.request.user.role == "employee":
            return Enrollment.objects.filter(user=self.request.user)
        return Enrollment.objects.all()
