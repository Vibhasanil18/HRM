import React, { useState, useEffect } from "react";
import { getLeaveRequests, approveLeave, rejectLeave } from "../services/api";
import './LeaveRequest.css';  // Import the stylesheet

const LeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Fetch leave requests from backend
  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    const data = await getLeaveRequests();
    setLeaveRequests(data);
  };

  const handleApprove = async (id) => {
    const result = await approveLeave(id);
    if (result) {
      alert("Leave approved successfully!");
      fetchLeaveRequests(); // Refresh the list
    }
  };

  const handleReject = async (id) => {
    const result = await rejectLeave(id);
    if (result) {
      alert("Leave rejected successfully!");
      fetchLeaveRequests(); // Refresh the list
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Leave Requests</h2>
      <div className="leave-requests">
        {leaveRequests.map((request) => (
          <div key={request.id} className="leave-card">
            <h4>{request.employee_name}</h4>
            <p>Leave Type: {request.leave_type}</p>
            <p>Start Date: {request.start_date}</p>
            <p>End Date: {request.end_date}</p>
            <p>
              Status:{" "}
              <span
                style={{
                  color:
                    request.status === "Pending"
                      ? "orange"
                      : request.status === "Approved"
                      ? "green"
                      : "red",
                }}
              >
                {request.status}
              </span>
            </p>
            {request.status === "Pending" && (
              <div>
                <button
                  className="btn btn-success"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequest;
