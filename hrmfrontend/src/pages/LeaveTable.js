import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaveTable = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Fetch leave requests from backend on component mount
    axios.get('http://localhost:8000/api/leave-requests/')
      .then(response => setLeaves(response.data))
      .catch(error => console.error("Error fetching leaves:", error));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    // Update the leave request status
    axios.put(`http://localhost:8000/api/leave-requests/${id}/`, { status: newStatus })
      .then(() => {
        // Update local state to reflect status change
        setLeaves(prevLeaves => prevLeaves.map(leave =>
          leave.id === id ? { ...leave, status: newStatus } : leave
        ));
      })
      .catch(error => console.error("Error updating leave status:", error));
  };

  return (
    <div>
      <h2>Leave Requests</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={styles.th}>Employee Name</th>
            <th style={styles.th}>Leave Type</th>
            <th style={styles.th}>Start Date</th>
            <th style={styles.th}>End Date</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id} style={styles.row}>
              <td style={styles.td}>{leave.name}</td>
              <td style={styles.td}>{leave.leave_type}</td>
              <td style={styles.td}>{leave.start_date}</td>
              <td style={styles.td}>{leave.end_date}</td>
              <td style={styles.td}>{leave.description}</td>
              <td style={styles.td}><b>{leave.status}</b></td>
              <td style={styles.td}>
                {leave.status === "Pending" && (
                  <>
                    <button
                      style={styles.approveButton}
                      onClick={() => handleStatusChange(leave.id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      style={styles.rejectButton}
                      onClick={() => handleStatusChange(leave.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#fff#0a0706 ",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
  row: {
    backgroundColor: "#fff",
  },
  approveButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    marginRight: "5px",
  },
  rejectButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default LeaveTable;
