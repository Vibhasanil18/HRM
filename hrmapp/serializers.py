from rest_framework import serializers
from .models import Employee, Attendance, Payroll, Report,LeaveRequest

# Employee Serializer
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

# Attendance Serializer
class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ['id', 'employee_id', 'date', 'status']

# Payroll Serializer
class PayrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payroll
        fields = ['id', 'employee_id', 'name', 'month', 'salary', 'status']

# Report Serializer (for report generation)
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['report_type', 'report_data', 'generated_at']

# leave

class LeaveRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaveRequest
        fields = '__all__'
