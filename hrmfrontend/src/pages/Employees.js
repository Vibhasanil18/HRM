import React, { useState, useEffect } from "react";
import axios from "axios";

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/employees/")
            .then((response) => setEmployees(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Employee Management</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.role}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;
