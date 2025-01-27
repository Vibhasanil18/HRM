import React, { useState, useEffect } from 'react';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../services/api';
import './EmployeeManagement.css';  // Import the stylesheet

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({ employee_id: '', name: '', position: '', department: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateEmployee(currentEmployeeId, formData);
            setIsEditing(false);
        } else {
            await addEmployee(formData);
        }
        fetchEmployees();
        setFormData({ employee_id: '', name: '', position: '', department: '' });
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    const handleEdit = (employee) => {
        setFormData({
            employee_id: employee.employee_id,
            name: employee.name,
            position: employee.position,
            department: employee.department,
        });
        setIsEditing(true);
        setCurrentEmployeeId(employee.id);
    };

    return (
        <div className="employee-management-container">
            <h2>Employee Management</h2>
            <form onSubmit={handleSubmit} className="employee-management-form">
                <input
                    type="text"
                    placeholder="Employee ID"
                    value={formData.employee_id}
                    onChange={(e) => setFormData({ ...formData, employee_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
                <button type="submit">
                    {isEditing ? 'Update Employee' : 'Add Employee'}
                </button>
            </form>

            <table className="employee-management-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.employee_id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.position}</td>
                            <td>{emp.department}</td>
                            <td className="employee-management-actions">
                                <button onClick={() => handleEdit(emp)}>Edit</button>
                                <button onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeManagement;
