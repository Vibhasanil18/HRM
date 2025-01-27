import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and routing components
import NavigationBar from './components/NavigationBar'; // Ensure this is correctly imported
import Dashboard from './pages/Dashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import Reports from './pages/Reports';
import LeaveRequest from './pages/LeaveRequest'; // Import Leave Request page

function App() {
  return (
    <Router>
      <NavigationBar /> {/* Navigation bar remains outside the Routes but inside Router */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/leaves" element={<LeaveRequest />} /> {/* Add the Leave Request route */}
      </Routes>
    </Router>
  );
}

export default App;
