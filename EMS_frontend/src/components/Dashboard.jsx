import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Import Sidebar
import "./Dashboard.css";
import Footer from "./Footer"; // Import Footer

function Dashboard() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", salary: 5000 },
    { id: 2, name: "Jane Smith", salary: 4500 },
    { id: 3, name: "Alice Brown", salary: 6000 },
  ]);

  // Check authentication: Redirect to login if not authenticated
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") !== "true") {
      navigate("/"); // Redirect to login
    }
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <Sidebar /> {/* Sidebar for navigation */}
      <div className="background">

      <main className="dashboard-content">
        <h2>Dashboard Overview</h2>

        <div className="dashboard-overview">
          <div className="overview-item">
            <div className="icon"><i className="fas fa-users"></i></div>
            <div className="details">
              <p><strong>Total Employees:</strong> {employees.length}</p>
            </div>
          </div>

          <div className="overview-item">
            <div className="icon"><i className="fas fa-building"></i></div>
            <div className="details">
              <p><strong>Total Projects:</strong> {employees.length}</p>
            </div>
          </div>

          <div className="overview-item">
            <div className="icon"><i className="fas fa-dollar-sign"></i></div>
            <div className="details">
              <p><strong>Total Monthly Salary:</strong> ${employees.reduce((acc, emp) => acc + emp.salary, 0)}</p>
            </div>
          </div>
        </div>
      </main>
      </div>

      <Footer /> {/* ✅ Footer added here */}
    </div>
  );
}

export default Dashboard;
