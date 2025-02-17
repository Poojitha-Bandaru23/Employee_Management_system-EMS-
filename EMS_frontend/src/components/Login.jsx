import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./Login.css";

function Login() {
  const [companyemail, setCompanyEmail] = useState(""); // Change to match backend
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      const role = localStorage.getItem("userRole");
      if (role === "ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/employee_dashboard");
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:8080/login", {
        companyemail: companyemail,  // ✅ Match backend expected key
        password: password,
      });

      if (response.data.login === "success") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userRole", response.data.role);
        localStorage.setItem("employeeDetails", JSON.stringify(response.data.employeeDetails || {}));
        
        // Redirect based on user role
        if (response.data.role === "ADMIN") {
          navigate("/dashboard");
        } else {
          navigate("/employee_dashboard");
        }
      } else {
        setError("Invalid email or password. Try again!");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginpage">
      <div className="p-3 rounded w-25 border loginform">
        <h2 className="Login">Login Page</h2>

        {error && <p className="text-danger">{error}</p>} {/* Display error */}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="companyemail"><strong>Email:</strong></label>
            <input
              type="email"
              placeholder="Enter email"
              value={companyemail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="form-control rounded-0"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password:</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
