import React, { useState, useEffect } from 'react'; 
import { fetchAttendanceRecords, createAttendanceRecord } from '../services/api';
import './styles.css';  // Import the stylesheet

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    employee_id: '',
    date: '',
    status: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch attendance records
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setLoading(true);
        const data = await fetchAttendanceRecords();
        setAttendanceRecords(data);
      } catch (err) {
        setError('Failed to fetch attendance records.');
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAttendanceRecord(newRecord);
      setAttendanceRecords([...attendanceRecords, response]);
      setNewRecord({ employee_id: '', date: '', status: '' });
    } catch (err) {
      setError('Failed to add new attendance record.');
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#fff' }}>Attendance Records</h1>

      {loading && <p style={{ textAlign: 'center', color: '#007bff' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.employee_id}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: '30px', color: '#fff' }}>Add New Attendance</h2>
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="employee_id" style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
            Employee ID
          </label>
          <input
            type="text"
            id="employee_id"
            name="employee_id"
            value={newRecord.employee_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="date" style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={newRecord.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="status" style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
            Status
          </label>
          <select
            id="status"
            name="status"
            value={newRecord.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit">
          Add Attendance
        </button>
      </form>
    </div>
  );
};

export default Attendance;
