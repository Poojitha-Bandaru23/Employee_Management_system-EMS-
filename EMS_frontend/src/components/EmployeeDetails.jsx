import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeContainer.css"; // Import the CSS


function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");

        console.log("API Response:", response.data); // Debugging

        // Check if response is an array and get the first employee
        if (Array.isArray(response.data) && response.data.length > 0) {
          setEmployee(response.data[0]); // Select the first employee
        } else {
          console.error("Unexpected response format:", response.data);
          setEmployee(null);
        }
      } catch (error) {
        console.error("Error fetching employee details:", error);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!employee) return <div>Error: Employee data not found.</div>;

  return (
<div className="employee-container">
      <h3>Employee Details</h3>
      <p><span>Name:</span> {employee?.fullName || "N/A"}</p>
      <p><span>Email:</span> {employee?.companyemail || "N/A"}</p>
      <p><span>Age:</span> {employee?.age || "N/A"}</p>
      <p><span>Gender:</span> {employee?.gender || "N/A"}</p>
      <p><span>Role:</span> {employee?.role || "N/A"}</p>
    </div>  );
}

export default EmployeeDetails;
