import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addLeaveRequest } from '../services/api'; // Ensure this API function is correctly defined

const AddLeaveRequest = () => {
  const history = useHistory();
  const [leaveData, setLeaveData] = useState({
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLeaveRequest(leaveData); // Ensure this API call is correct
      history.push('/'); // Redirect to the leave request list page after submission
    } catch (error) {
      console.error('Error adding leave request:', error);
    }
  };

  return (
    <div>
      <h2>Add Leave Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          value={leaveData.employeeName}
          onChange={handleChange}
          placeholder="Employee Name"
          required
        />
        <input
          type="text"
          name="leaveType"
          value={leaveData.leaveType}
          onChange={handleChange}
          placeholder="Leave Type"
          required
        />
        <input
          type="date"
          name="startDate"
          value={leaveData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={leaveData.endDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Leave Request</button>
      </form>
    </div>
  );
};

export default AddLeaveRequest;
