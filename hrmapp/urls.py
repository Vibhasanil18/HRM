from django.urls import path
from . import views

urlpatterns = [
    # Employee endpoints
    path('employees/', views.employee_list, name='employee_list'),
    path('employees/<int:pk>/', views.employee_detail, name='employee_detail'),

    # Attendance endpoints
    path('attendance/', views.AttendanceList.as_view(), name='attendance-list'),

    # Payroll endpoints
    path('payroll/', views.PayrollList.as_view(), name='payroll_list'),  # Updated to use PayrollList class-based view
    path('payroll/<int:pk>/', views.PayrollDetail.as_view(), name='payroll_detail'),  # Updated to use PayrollDetail class-based view
    
    # Report endpoint using GenerateReport class-based view
    path('generate_report/', views.GenerateReport.as_view(), name='generate_report'),
    
    # leave
    path('leave-requests/', views.LeaveRequestListCreateAPIView.as_view(), name='leave-requests'),
    path('leave-requests/<int:pk>/', views.LeaveRequestUpdateAPIView.as_view(), name='leave-request-detail'),
]
