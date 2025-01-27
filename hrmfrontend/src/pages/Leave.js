import React, { useState, useEffect } from "react"; 
import { getLeaves, addLeave, updateLeaveStatus } from "../services/api"; // Import named methods
import LeaveTable from "./LeaveTable"; // Correct import path for LeaveTable.js

const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [newLeave, setNewLeave] = useState({
    name: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    description: "", // New description field
    status: "Pending",
  });

  const leaveTypes = [
    "Casual Leave",
    "Sick Leave",
    "Earned Leave",
    "Maternity Leave",
    "Paternity Leave",
    "Public Holiday",
  ]; // Define available leave types

  // Fetch all leave requests from the API
  const fetchLeaves = async () => {
    try {
      const response = await getLeaves();
      setLeaves(response);
    } catch (error) {
      console.error("Error fetching leaves:", error);
    }
  };

  // Handle input change for the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeave({ ...newLeave, [name]: value });
  };

  // Handle form submission (add leave request)
  const handleAddLeave = async () => {
    // Validate the form fields before submission
    if (
      !newLeave.name ||
      !newLeave.leaveType ||
      !newLeave.startDate ||
      !newLeave.endDate ||
      !newLeave.description
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      await addLeave(newLeave);
      fetchLeaves(); // Refresh the leaves list after adding a new request
      setNewLeave({
        name: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        description: "", // Reset description
        status: "Pending",
      });
    } catch (error) {
      console.error("Error adding leave:", error);
    }
  };

  // Handle updating the status of leave requests (approve/reject)
  const handleStatusChange = async (id, status) => {
    try {
      await updateLeaveStatus(id, status);
      fetchLeaves(); // Refresh the leaves list after status change
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };

  // Fetch leaves when the component is mounted
  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div>
      {/* Leave Requests Table */}
      <LeaveTable leaves={leaves} onStatusChange={handleStatusChange} />

      {/* Add Leave Request Form */}
      <h3>Add Leave Request</h3>
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={newLeave.name}
        onChange={handleInputChange}
      />
      <select
        name="leaveType"
        value={newLeave.leaveType}
        onChange={handleInputChange}
      >
        <option value="">Select Leave Type</option>
        {leaveTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="startDate"
        value={newLeave.startDate}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="endDate"
        value={newLeave.endDate}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Leave Description"
        value={newLeave.description}
        onChange={handleInputChange}
        rows="4"
        cols="50"
      />
      <button onClick={handleAddLeave}>Submit Leave Request</button>
    </div>
  );
};

export default Leave;
