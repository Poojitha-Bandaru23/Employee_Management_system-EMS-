import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getEmployeeById, updateEmployee } from "../api"; // API functions
import "./Edit.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

function EditEmployee() {
  const { id } = useParams(); // Get employee ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    mobile: "",
    position: "",
    projectCode: "",
  });

  // Fetch employee details when component mounts
  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const response = await getEmployeeById(id);
      if (response.data) {
        setFormData({
          fullName: response.data.fullName || "",
          companyEmail: response.data.companyEmail || "",
          mobile: response.data.mobile || "",
          position: response.data.professionalDetails?.position || "",
          projectCode: response.data.professionalDetails?.reportingManager || "",
        });
      }
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, formData); // API call to update employee
      navigate("/view"); // Redirect to Employee List
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h2>Edit Employee</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="mb-3">
            <label className="form-label">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Company Email:</label>
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Position:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Project Code:</label>
            <input
              type="text"
              name="projectCode"
              value={formData.projectCode}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </main>
    </div>
  );
}

export default EditEmployee;
