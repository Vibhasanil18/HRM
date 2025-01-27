from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status  # Use 'status' for proper HTTP codes
from rest_framework.views import APIView
from .models import Employee, Attendance, Payroll,Report,LeaveRequest
from .serializers import EmployeeSerializer, AttendanceSerializer, PayrollSerializer,ReportSerializer
from .serializers import LeaveRequestSerializer
from rest_framework import generics
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from io import BytesIO
import csv
from rest_framework import viewsets



# Employee List View (GET/POST)
@api_view(['GET', 'POST'])
def employee_list(request):
    if request.method == 'GET':
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Created
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Bad Request

# Employee Detail View (PUT/DELETE)
@api_view(['PUT', 'DELETE'])
def employee_detail(request, pk):
    try:
        employee = Employee.objects.get(pk=pk)
    except Employee.DoesNotExist:
        return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        employee.delete()
        return Response({'message': 'Employee deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


# Attendance View (GET/POST)
class AttendanceList(APIView):
    def get(self, request):
        records = Attendance.objects.all()
        serializer = AttendanceSerializer(records, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AttendanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Payroll View (GET/POST)
class PayrollList(generics.ListCreateAPIView):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer

# Retrieve, update, or delete a specific payroll entry
class PayrollDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer

# report
class GenerateReport(APIView):
    def post(self, request):
        report_type = request.data.get('report_type')

        if report_type == 'employee':
            employees = Employee.objects.all()

            # Create a CSV response for employee data
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="employee_report.csv"'

            writer = csv.writer(response)
            writer.writerow(['Employee ID', 'Name', 'Position', 'Department'])
            for employee in employees:
                writer.writerow([employee.employee_id, employee.name, employee.position, employee.department])

            return response

        elif report_type == 'attendance':
            attendance_records = Attendance.objects.all()

            # Create a CSV response for attendance data
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="attendance_report.csv"'

            writer = csv.writer(response)
            writer.writerow(['Employee ID', 'Date', 'Status'])
            for record in attendance_records:
                writer.writerow([record.employee_id, record.date, record.status])

            return response

        elif report_type == 'payroll':
            payroll_records = Payroll.objects.all()

            # Create a CSV response for payroll data
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="payroll_report.csv"'

            writer = csv.writer(response)
            writer.writerow(['Employee ID', 'Name', 'Month', 'Salary', 'Status'])
            for record in payroll_records:
                writer.writerow([record.employee_id, record.name, record.month, record.salary, record.status])

            return response

        return JsonResponse({'error': 'Invalid report type'}, status=400)
    



# leave

class LeaveRequestListCreateAPIView(APIView):
    def get(self, request):
        leave_requests = LeaveRequest.objects.all()
        serializer = LeaveRequestSerializer(leave_requests, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LeaveRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LeaveRequestUpdateAPIView(APIView):
    def patch(self, request, pk):
        try:
            leave_request = LeaveRequest.objects.get(pk=pk)
        except LeaveRequest.DoesNotExist:
            return Response({"error": "Leave request not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = LeaveRequestSerializer(leave_request, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

