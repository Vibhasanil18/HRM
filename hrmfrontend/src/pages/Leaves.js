import React from "react"; 
import { Link } from "react-router-dom"; // You can add navigation links if needed

const Leaves = () => {
  return (
    <div
      style={{
        backgroundColor: '#f4f6f8',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          color: '#3A9D8C', 
          fontSize: '2.5rem', 
          textAlign: 'center', 
          marginBottom: '20px',
        }}
      >
        Leave Requests
      </h2>
      <p
        style={{
          color: '#555', 
          fontSize: '1rem', 
          textAlign: 'center', 
          marginBottom: '30px',
        }}
      >
        View and manage employee leave requests in this section.
      </p>
      
      {/* Add cards for leave requests */}
      <div className="leave-card" style={cardStyle}>
        <div style={cardContentStyle}>
          <h4 style={{ color: '#3A9D8C' }}>John Doe</h4>
          <p>Leave Type: Sick Leave</p>
          <p>Start Date: 12/02/2025</p>
          <p>End Date: 15/02/2025</p>
          <p>Status: <span style={{ color: 'orange' }}>Pending</span></p>
        </div>
        <div style={cardActionsStyle}>
          <button style={buttonStyle}>Approve</button>
          <button style={buttonStyle}>Reject</button>
        </div>
      </div>

      {/* Add more leave cards here if necessary */}

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link to="/add-leave">
          <button style={addButtonStyle}>Add Leave Request</button>
        </Link>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '15px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const cardContentStyle = {
  marginBottom: '15px',
};

const cardActionsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  backgroundColor: '#3A9D8C',
  color: '#fff',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const addButtonStyle = {
  backgroundColor: '#f1d100',
  color: '#fff',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '5px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Leaves;