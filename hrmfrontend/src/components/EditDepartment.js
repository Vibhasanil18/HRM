import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDepartment = () => {
  const [deptName, setDeptName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/departments/${id}/`)
      .then((response) => {
        setDeptName(response.data.dept_name);
        setDescription(response.data.description);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/departments/${id}/`, {
        dept_name: deptName,
        description: description,
      })
      .then(() => {
        alert("Department updated successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1>Edit Department</h1>
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
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditDepartment;
