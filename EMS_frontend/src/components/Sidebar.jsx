import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Import CSS for Sidebar

function Sidebar() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Clear authentication data
    navigate("/"); // Redirect to Login Page
  };

  return (
    <aside className="sidebar">
      <h2 className="admin-heading">Admin Dashboard</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/view">View Employees</Link></li>
        <li><Link to="/add">Add Employee</Link></li>

        {/* Move Logout Button Here */}
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
