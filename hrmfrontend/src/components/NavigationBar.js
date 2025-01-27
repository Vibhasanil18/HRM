import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import './NavigationBar.css'; // Import the CSS file

const NavigationBar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/"> {/* Wrap the logo in a Link to redirect to the dashboard */}
          <img src="/assets/images/vibgyor-logo.png" alt="Logo" className="logo-icon" /> {/* Replace with your logo */}
        </Link>
      </div>

      {/* Navbar Links */}
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Dashboard</Link></li>
        <li className="nav-item"><Link to="/employees" className="nav-link">Employee Management</Link></li>
        <li className="nav-item"><Link to="/attendance" className="nav-link">Attendance</Link></li>
        <li className="nav-item"><Link to="/payroll" className="nav-link">Payroll</Link></li>
        <li className="nav-item"><Link to="/reports" className="nav-link">Reports</Link></li>
        <li className="nav-item"><Link to="/leaves" className="nav-link">Leaves</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
