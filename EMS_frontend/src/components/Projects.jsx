// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Projects() {
//   const [projects, setProjects] = useState([[]]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await axios.get("http://localhost:8080/api/employees", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects", error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (projects.length === 0) return <div>Loading...</div>;

//   return (
//     <div>
//       <h3>Projects</h3>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.projectId}>
//             <p>Project Code: {project.projectCode}</p>
//             <p>Client: {project.clientName}</p>
//             <p>Start Date: {project.startDate}</p>
//             <p>End Date: {project.endDate}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Projects;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeContainer.css"; // Import the CSS

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");

        console.log("Full API Response:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          console.log("First Employee Data:", response.data[0]);
          setProjects(response.data[0].projects || []); // ✅ Extract `projects` array
        } else {
          console.error("Unexpected response format:", response.data);
          setProjects([]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (projects.length === 0) return <div>No projects found.</div>;

  return (
    <div className="employee-container">
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>
            <p><span>Project Code: </span>{project?.projectCode || "N/A"}</p>
            <p><span>Client: </span>{project?.clientName || "N/A"}</p>
            <p><span>Start Date: </span>{project?.startDate || "N/A"}</p>
            <p><span>End Date: </span>{project?.endDate || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
