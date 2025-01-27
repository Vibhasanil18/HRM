# models.py
from django.db import models
from django.contrib.auth.models import User

# Employee Model
class Employee(models.Model):
    employee_id = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    department = models.CharField(max_length=50)

    def __str__(self):
        return self.name

# Attendance Model

class Attendance(models.Model):
    employee_id = models.CharField(max_length=100)
    date = models.DateField()
    status = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.employee_id} - {self.date}'

#payroll
class Payroll(models.Model):
    employee_id = models.CharField(max_length=100)
    name = models.CharField(max_length=200)
    month = models.CharField(max_length=20)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Paid', 'Paid')])

    def __str__(self):
        return f"{self.employee_id} - {self.month}"


# Report Model (optional)
class Report(models.Model):
    report_type = models.CharField(max_length=100)
    report_data = models.JSONField()  # Store report data as JSON
    generated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.report_type} - {self.generated_at}'
    
# leave
class LeaveRequest(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Approved", "Approved"),
        ("Rejected", "Rejected"),
    ]

    employee_name = models.CharField(max_length=100)
    leave_type = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="Pending")

    def __str__(self):
        return self.employee_name