from rest_framework import permissions

class IsEmployee(permissions.BasePermission):
    # Allows access only to users with role 'employee'.
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role == "employee"

class IsManager(permissions.BasePermission):
    # Allows access only to users with role 'manager'.
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role == "manager"

class IsAdmin(permissions.BasePermission):
    # Allows access only to users with role 'admin'.
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role == "admin"

class IsManagerOrAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role in ["manager", "admin"]        