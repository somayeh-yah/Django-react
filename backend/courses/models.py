from django.db import models
from userauths.models import User
# Create your models here.



#  GROUPS COURSES by CATEGORY
class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

#  THE MAIN COURSE 
class Course(models.Model):

    class Level(models.TextChoices):
        BEGINNER = "beginner", "Beginner"
        INTERMEDIATE = "intermediate", "Intermediate"
        ADVANCED = "advanced", "Advanced"

    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PUBLISHED = "published", "Published"

    # BASE INFO
    title = models.CharField(max_length=200)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to="courses/thumbnails/", blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)

    # CATEGORY
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="courses")
    level = models.CharField(max_length=20, choices=Level.choices, default=Level.BEGINNER)

    # price
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    # CREATED BY
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="courses")

    # STATUS
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.DRAFT)

    # DATE
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

# INDIVIDUAL LESSONS THAT BELONG TO A COURCE A COURSE
class Lesson(models.Model):
    # WHICH COURCE DOES THIS LESSON BELONG TO
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="lessons")

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)  # ← ORDER OF THE LESSONS
    duration = models.PositiveIntegerField(default=0, help_text="Duration in minutes")

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order"]  

    def __str__(self):
        return f"{self.course.title} - {self.title}"

# CONNECTS A EMPLOYEE TO A COURCE
class Enrollment(models.Model):
    
    class EnrollmentType(models.TextChoices):
        # EMPLOYEE CHOICE 
        SELF = "self", "Self Enrolled"       
        # MANAGER CHOICE
        ASSIGNED = "assigned", "Assigned"     

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="enrollments")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="enrollments")
    enrolled_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    enrollment_type = models.CharField(          
        max_length=20,
        choices=EnrollmentType.choices,
        default=EnrollmentType.SELF
    )

    # ASSIGNED BY IF EMPLOYEE ASSIGNMENT == NULL 
    assigned_by = models.ForeignKey(             
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assigned_enrollments"
    )

    class Meta:
        unique_together = ["user", "course"]

    def __str__(self):
        if self.assigned_by:
            return f"{self.user.full_name} - {self.course.title} (assigned by {self.assigned_by.full_name})"
        return f"{self.user.full_name} - {self.course.title} (self enrolled)"