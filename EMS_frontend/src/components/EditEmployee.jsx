import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../api"; // Ensure these API functions exist
import './EditEmployee.css';


const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    mobile: "",
    position: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      alert("Employee updated successfully!");
      navigate("/view");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" value={employee.fullName} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="mobile" value={employee.mobile} onChange={handleChange} placeholder="Mobile" required />
        <input type="text" name="position" value={employee.position} onChange={handleChange} placeholder="Position" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
