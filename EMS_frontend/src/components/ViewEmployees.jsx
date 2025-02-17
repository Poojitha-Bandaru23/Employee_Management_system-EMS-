import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api"; 
import { useNavigate } from "react-router-dom";
import "./ViewEmployee.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();
      console.log("Fetched Employees:", response.data); // Ensure this logs the data you need
      setEmployees(response.data); // Update state
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  
  const handleEdit = (employeeId) => {
    navigate(`/edit/${employeeId}`);
  };

  const handleDelete = async (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(employeeId);
        loadEmployees(); // Refresh the employee list
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h2>Employee List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Manager</th>
                <th>Actions</th>
              </tr>
            </thead>
        <tbody>
      {employees.length > 0 ? (
        employees.map((emp, index) => (
          <tr key={emp.employeeId || index}>
            <td>{emp.employeeId || "N/A"}</td>
            <td>{emp.fullName || "N/A"}</td>
            <td>{emp.companyEmail || emp.personalEmail || "N/A"}</td>
            <td>{emp.mobile || "N/A"}</td>
            <td>{emp.professionalDetails?.reportingManager || "N/A"}</td>
            <td>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => handleEdit(emp.employeeId)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(emp.employeeId)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7" className="text-center">
            No employees found.
          </td>
        </tr>
      )}
    </tbody>

    

          </table>
        </div>
      </main>
    </div>
  );
}

export default ViewEmployees;

