import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [deptName, setDeptName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/departments/", {
        dept_name: deptName,
        description: description,
      })
      .then(() => {
        alert("Department added successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1>Add Department</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control"
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;
