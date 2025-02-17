import { useState } from "react";
import { addEmployee } from "../api";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./AddEmployee.css";

function AddEmployee() {
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState({
    personalDetails: {
      employeeId: "",
      fullName: "",
      dateOfBirth: "",
      gender: "",
      age: "",
      mobile: "",
      personalEmail: "",
      companyEmail: "",
    },
    professionalDetails: {
      officePhone: "",
      officeCity: "",
      officeAddress: "",
      reportingManager: "",
      hrName: "",
      dateOfJoining: "",
    },
    financeDetails: {
      aadharCard: "",
      bankName: "",
      branch: "",
      ctcBreakup: "",
      ifscCode: "",
      panCard: "",
    },
    projectDetails: [
      {
        projectCode: "",
        startDate: "",
        endDate: "",
        clientName: "",
        reportingManager: "",
      },
    ],
  });

  const handleChange = (section, field, value, index = null) => {
    setEmployeeData((prevData) => {
      const updatedData = { ...prevData };

      if (index !== null) {
        updatedData[section][index][field] = value;
      } else {
        updatedData[section][field] = value;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employeeData);
    navigate("/view");
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h2>Add Employee</h2>
        <div className="AddEmp-content">
          <form onSubmit={handleSubmit}>
            
            {/* Personal Details */}
            <fieldset>
              <legend>Personal Details</legend>
              <label>Employee Code</label>
              <input type="number" placeholder="employeeId" onChange={(e) => handleChange("personalDetails", "employeeId", e.target.value)} required />


              <label>Full Name</label>
              <input type="text" placeholder="Full Name" onChange={(e) => handleChange("personalDetails", "fullName", e.target.value)} required />
              
              <label>Date of Birth</label>
              <input type="date" onChange={(e) => handleChange("personalDetails", "dateOfBirth", e.target.value)} required />
              
              <label>Gender</label>
              <select onChange={(e) => handleChange("personalDetails", "gender", e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label>Age</label>
              <input type="number" placeholder="Age" onChange={(e) => handleChange("personalDetails", "age", e.target.value)} required />

              <label>Mobile</label>
              <input type="text" placeholder="Mobile" onChange={(e) => handleChange("personalDetails", "mobile", e.target.value)} required />

              <label>Personal Email</label>
              <input type="email" placeholder="Personal Email" onChange={(e) => handleChange("personalDetails", "personalEmail", e.target.value)} required />

              <label>Company Email</label>
              <input type="email" placeholder="Company Email" onChange={(e) => handleChange("personalDetails", "companyEmail", e.target.value)} required />
            </fieldset>

            {/* Professional Details */}
            <fieldset>
              <legend>Professional Details</legend>
              <label>Office Phone</label>
              <input type="text" placeholder="Office Phone" onChange={(e) => handleChange("professionalDetails", "officePhone", e.target.value)} required />

              <label>Office City</label>
              <input type="text" placeholder="Office City" onChange={(e) => handleChange("professionalDetails", "officeCity", e.target.value)} required />

              <label>Office Address</label>
              <input type="text" placeholder="Office Address" onChange={(e) => handleChange("professionalDetails", "officeAddress", e.target.value)} required />

              <label>Reporting Manager</label>
              <input type="text" placeholder="Reporting Manager" onChange={(e) => handleChange("professionalDetails", "reportingManager", e.target.value)} required />

              <label>HR Name</label>
              <input type="text" placeholder="HR Name" onChange={(e) => handleChange("professionalDetails", "hrName", e.target.value)} required />

              <label>Date of Joining</label>
              <input type="date" onChange={(e) => handleChange("professionalDetails", "dateOfJoining", e.target.value)} required />
            </fieldset>

            {/* Finance Details */}
            <fieldset>
              <legend>Finance Details</legend>
              <label>Aadhar Card</label>
              <input type="text" placeholder="Aadhar Card" onChange={(e) => handleChange("financeDetails", "aadharCard", e.target.value)} required />

              <label>Bank Name</label>
              <input type="text" placeholder="Bank Name" onChange={(e) => handleChange("financeDetails", "bankName", e.target.value)} required />

              <label>Branch</label>
              <input type="text" placeholder="Branch" onChange={(e) => handleChange("financeDetails", "branch", e.target.value)} required />

              <label>CTC Breakup</label>
              <input type="text" placeholder="CTC Breakup" onChange={(e) => handleChange("financeDetails", "ctcBreakup", e.target.value)} required />

              <label>IFSC Code</label>
              <input type="text" placeholder="IFSC Code" onChange={(e) => handleChange("financeDetails", "ifscCode", e.target.value)} required />

              <label>PAN Card</label>
              <input type="text" placeholder="PAN Card" onChange={(e) => handleChange("financeDetails", "panCard", e.target.value)} required />
            </fieldset>

            {/* Project Details */}
            <fieldset>
              <legend>Project Details</legend>
              {employeeData.projectDetails.map((project, index) => (
                <div key={index}>
                  <label>Project Code</label>
                  <input type="text" placeholder="Project Code" onChange={(e) => handleChange("projectDetails", "projectCode", e.target.value, index)} required />

                  <label>Start Date</label>
                  <input type="date" onChange={(e) => handleChange("projectDetails", "startDate", e.target.value, index)} required />

                  <label>End Date</label>
                  <input type="date" onChange={(e) => handleChange("projectDetails", "endDate", e.target.value, index)} required />

                  <label>Client Name</label>
                  <input type="text" placeholder="Client Name" onChange={(e) => handleChange("projectDetails", "clientName", e.target.value, index)} required />

                  <label>Reporting Manager</label>
                  <input type="text" placeholder="Reporting Manager" onChange={(e) => handleChange("projectDetails", "reportingManager", e.target.value, index)} required />
                </div>
              ))}
            </fieldset>
            <br />

            <button type="submit">Add Employee</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddEmployee;
