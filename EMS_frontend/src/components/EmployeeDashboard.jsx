import React from "react";
import { Routes, Route, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import Finance from "./Finance";
import Projects from "./Projects";
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");  // Remove token from storage
//     sessionStorage.clear();  // Clear session data
//     navigate("/");  // Redirect to login page (Ensure '/' is mapped to login)
// };
const handleLogout = () => {
  localStorage.removeItem("isAuthenticated"); // Clear authentication data
  navigate("/"); // Redirect to Login Page
};


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Employee Dashboard</h2>
        <ul>
          <li className={location.pathname.includes("details") ? "active" : ""}>
            <Link to="details">Employee Details</Link>
          </li>
          <li className={location.pathname.includes("professional") ? "active" : ""}>
            <Link to="professional">Professional Details</Link>
          </li>
          <li className={location.pathname.includes("finance") ? "active" : ""}>
            <Link to="finance">Finance</Link>
          </li>
          <li className={location.pathname.includes("projects") ? "active" : ""}>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default EmployeeDashboard;
