# admin.py
from django.contrib import admin
from .models import Employee, Attendance,Payroll,LeaveRequest

# EmployeeAdmin: Manage Employee records in the Django Admin interface
@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'name', 'position', 'department')  # Fields to display in the list view
    search_fields = ('employee_id', 'name', 'position', 'department')  # Enable search for specific fields
    list_filter = ('department', 'position')  # Add filter options for department and position

# AttendanceAdmin: Manage Attendance records in the Django Admin interface
admin.site.register(Attendance)

# payrol
@admin.register(Payroll)
class PayrollAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'name', 'month', 'salary', 'status')

# leave
@admin.register(LeaveRequest)
class LeaveRequestAdmin(admin.ModelAdmin):
    list_display = ['employee_name', 'leave_type', 'start_date', 'end_date', 'status']
    list_filter = ['status', 'leave_type']
    search_fields = ['employee_name']