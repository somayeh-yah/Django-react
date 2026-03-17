from rest_framework import serializers
from .models import Category, Course, Lesson, Enrollment


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug"]


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ["id", "title", "description", "video_url", "order", "duration"]


class CourseSerializer(serializers.ModelSerializer):
    # INCLUDE LESSONS NESTED INSIDE THE COURSE
    lessons = LessonSerializer(many=True, read_only=True)
    # SHOW CATEGORY NAME INSTEAD OF JUST THE ID
    category_name = serializers.CharField(source="category.name", read_only=True)
    # SHOW THE FULL NAME OF WHO CREATED THE COURSE
    created_by_name = serializers.CharField(source="created_by.full_name", read_only=True)

    class Meta:
        model = Course
        fields = [
            "id",
            "title",
            "description",
            "thumbnail",
            "video_url",
            "category",
            "category_name",
            "level",
            "price",
            "status",
            "created_by",
            "created_by_name",
            "lessons",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_by", "created_at", "updated_at"]


class EnrollmentSerializer(serializers.ModelSerializer):
    # SHOW COURSE INFO INSTEAD OF JUST THE ID
    course_title = serializers.CharField(source="course.title", read_only=True)
    course_thumbnail = serializers.ImageField(source="course.thumbnail", read_only=True)
    # SHOW THE FULL NAME OF WHO ASSIGNED THE COURSE
    assigned_by_name = serializers.CharField(source="assigned_by.full_name", read_only=True)

    class Meta:
        model = Enrollment
        fields = [
            "id",
            "course",
            "course_title",
            "course_thumbnail",
            "enrolled_at",
            "completed",
            "enrollment_type",
            "assigned_by",
            "assigned_by_name",
        ]
        read_only_fields = ["enrolled_at", "assigned_by"]