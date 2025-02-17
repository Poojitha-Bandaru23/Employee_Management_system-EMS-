// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/EditEmployee";  // ✅ Correct Import
// import DeleteEmployee from "./components/DeleteEmployee";
// import ViewEmployees from "./components/ViewEmployees";
// import Login from "./components/Login";  // ✅ Import Login Page
// import "bootstrap/dist/css/bootstrap.min.css";
// import EmployeeDashboard from "./components/EmployeeDashboard";
// import EmployeeDetails from "./components/EmployeeDetails";
// import Finance from "./components/Finance";
// import Projects from "./components/Projects";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} /> {/* ✅ Set Login as default */}
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/employee_dashboard" element={<EmployeeDashboard />}/>
//       <Route path="/add" element={<AddEmployee />} />
//       <Route path="/edit/:id" element={<EditEmployee />} />  {/* ✅ Corrected */}
//       <Route path="/delete/:id" element={<DeleteEmployee />} />
//       <Route path="/view" element={<ViewEmployees />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee"; 
import DeleteEmployee from "./components/DeleteEmployee";
import ViewEmployees from "./components/ViewEmployees";
import Login from "./components/Login"; 
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeDashboard from "./components/EmployeeDashboard";
import EmployeeDetails from "./components/EmployeeDetails";
import ProfessionalDetails from "./components/ProfessionalDetails";
import Finance from "./components/Finance";
import Projects from "./components/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/edit/:id" element={<EditEmployee />} />
      <Route path="/delete/:id" element={<DeleteEmployee />} />
      <Route path="/view" element={<ViewEmployees />} />

      {/* Employee Dashboard with nested routes */}
      <Route path="/employee_dashboard/*" element={<EmployeeDashboard />}>
        <Route path="details" element={<EmployeeDetails />} />
        <Route path="professional" element={<ProfessionalDetails />} />
        <Route path="finance" element={<Finance />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;

