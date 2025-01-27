import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Card, Form } from 'react-bootstrap';
import { fetchPayrollRecords, createPayrollRecord } from '../services/api'; // Import API methods
import './payroll.css'; // Import the CSS file

const Payroll = () => {
  const [payrollData, setPayrollData] = useState([]);
  const [newPayroll, setNewPayroll] = useState({
    employee_id: '',
    name: '',
    month: '',
    salary: '',
    status: 'Pending',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch payroll data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchPayrollRecords();
        setPayrollData(data);
      } catch (err) {
        setError('Failed to fetch payroll records.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayroll({ ...newPayroll, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPayrollRecord(newPayroll);
      setPayrollData([...payrollData, response]);
      setNewPayroll({
        employee_id: '',
        name: '',
        month: '',
        salary: '',
        status: 'Pending',
      });
    } catch (err) {
      setError('Failed to add payroll entry.');
    }
  };

  return (
    <Container className="container-payroll">
      <h2 className="payroll-title">Payroll Management</h2>
      <p className="payroll-description">Manage and view payroll records for all employees.</p>

      {/* Payroll Table */}
      <Card className="payroll-table-card">
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Month</th>
                <th>Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((item) => (
                <tr key={item.id}>
                  <td>{item.employee_id}</td>
                  <td>{item.name}</td>
                  <td>{item.month}</td>
                  <td>{item.salary}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Add Payroll Form */}
      <h4 className="payroll-form-title">Add New Payroll Entry</h4>
      <Form onSubmit={handleFormSubmit} className="payroll-form">
        <Form.Group>
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            name="employee_id"
            value={newPayroll.employee_id}
            onChange={handleInputChange}
            required
            className="payroll-input"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newPayroll.name}
            onChange={handleInputChange}
            required
            className="payroll-input"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Month</Form.Label>
          <Form.Control
            type="text"
            name="month"
            value={newPayroll.month}
            onChange={handleInputChange}
            required
            className="payroll-input"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={newPayroll.salary}
            onChange={handleInputChange}
            required
            className="payroll-input"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={newPayroll.status}
            onChange={handleInputChange}
            className="payroll-input"
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" className="payroll-button">Add Payroll Entry</Button>
      </Form>
      {error && <p className="payroll-error">{error}</p>}
    </Container>
  );
};

export default Payroll;
