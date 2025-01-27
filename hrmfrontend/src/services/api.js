import axios from 'axios';

// Create an Axios instance with the base URL
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',  // Ensure this matches your Django base URL
});

// Employee API methods
export const getEmployees = () => API.get('employees/');
export const addEmployee = (data) => API.post('employees/', data);
export const updateEmployee = (id, data) => API.put(`employees/${id}/`, data);
export const deleteEmployee = (id) => API.delete(`employees/${id}/`);

// Attendance API methods
export const fetchAttendanceRecords = async () => {
  try {
    const response = await API.get('attendance/');
    return response.data;
  } catch (error) {
    console.error('Error fetching attendance records:', error);
    return [];
  }
};

export const createAttendanceRecord = async (record) => {
  try {
    const response = await API.post('attendance/', record);
    return response.data;
  } catch (error) {
    console.error('Error creating attendance record:', error);
    return null;
  }
};

// Payroll API methods
export const fetchPayrollRecords = async () => {
  try {
    const response = await API.get('payroll/');
    return response.data;
  } catch (error) {
    console.error('Error fetching payroll records:', error);
    return [];
  }
};

export const createPayrollRecord = async (record) => {
  try {
    const response = await API.post('payroll/', record);
    return response.data;
  } catch (error) {
    console.error('Error creating payroll record:', error);
    return null;
  }
};

// Generate report API method
export const generateReport = async (reportType) => {
  try {
    const response = await API.post('generate_report/', { report_type: reportType }, { responseType: 'blob' });

    // Ensure response data is a Blob and create a download link properly
    if (response.data instanceof Blob) {
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${reportType}_report.csv`);  // Adjust the file name based on the report type
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL after download
      window.URL.revokeObjectURL(url);
    } else {
      console.error('Invalid response data for report generation');
    }
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
};


// Leave API methods
// Fetch leave requests
export const getLeaveRequests = async () => {
  try {
    const response = await API.get("leave-requests/");
    return response.data;
  } catch (error) {
    console.error("Error fetching leave requests:", error);
    return [];
  }
};

// Approve leave
export const approveLeave = async (id) => {
  try {
    const response = await API.patch(`leave-requests/${id}/`, {
      status: "Approved",
    });
    return response.data;
  } catch (error) {
    console.error("Error approving leave:", error);
    return null;
  }
};

// Reject leave
export const rejectLeave = async (id) => {
  try {
    const response = await API.patch(`leave-requests/${id}/`, {
      status: "Rejected",
    });
    return response.data;
  } catch (error) {
    console.error("Error rejecting leave:", error);
    return null;
  }
};

