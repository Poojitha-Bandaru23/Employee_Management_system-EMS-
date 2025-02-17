// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function ProfessionalDetails() {
//   const { profDetailId } = useParams(); // Get profDetailId from URL
//   const [professionalDetails, setProfessionalDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfessionalDetails = async () => {
//       if (!profDetailId) {
//         console.error("No professional detail ID provided");
//         setLoading(false);
//         return;
//       }


//       try {
//         const response = await axios.get(`http://localhost:8080/api/employees`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setProfessionalDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching professional details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessionalDetails();
//   }, [profDetailId]); // ✅ Runs when profDetailId changes

//   if (loading) return <div>Loading...</div>;
//   if (!professionalDetails) return <div>No professional details found</div>;

//   return (
//     <div>
//       <h3>Professional Details</h3>
//       <p>Company Email: {professionalDetails.companyEmail || "N/A"}</p>
//       <p>Office Phone: {professionalDetails.officePhone || "N/A"}</p>
//       <p>Office City: {professionalDetails.officeCity || "N/A"}</p>
//       <p>Office Address: {professionalDetails.officeAddress || "N/A"}</p>
//       <p>Reporting Manager: {professionalDetails.reportingManager || "N/A"}</p>
//     </div>
//   );
// }

// export default ProfessionalDetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ProfessionalDetails() {
//   const [professionalDetails, setProfessionalDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfessionalDetails = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:8080/api/employees", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("API Response:", response.data); // Debugging

//         // Ensure the response structure is correct
//         if (Array.isArray(response.data) && response.data.length > 0) {
//           setProfessionalDetails(response.data[0]); // Select the first employee's professional details
//         } else {
//           console.error("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching professional details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessionalDetails();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!professionalDetails) return <div>Error: Professional details not found.</div>;

//   return (
//     <div>
//       <h3>Professional Details</h3>
//       <p>Company Email: {professionalDetails?.companyEmail || "N/A"}</p>
//       <p>Office Phone: {professionalDetails?.officePhone || "N/A"}</p>
//       <p>Office City: {professionalDetails?.officeCity || "N/A"}</p>
//       <p>Office Address: {professionalDetails?.officeAddress || "N/A"}</p>
//       <p>Reporting Manager: {professionalDetails?.reportingManager || "N/A"}</p>
//     </div>
//   );
// }

// export default ProfessionalDetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ProfessionalDetails() {
//   const [professionalDetails, setProfessionalDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfessionalDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/employees");

//         console.log("API Response:", response.data); // 🔍 Debugging step

//         if (response.data && typeof response.data === "object") {
//           setProfessionalDetails(response.data[0]);
//         } else {
//           console.error("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching professional details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessionalDetails();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!professionalDetails) return <div>Error: Professional details not found.</div>;

//   return (
//     <div>
//       <h3>Professional Details</h3>
//       <p>Company Email: {professionalDetails?.companyEmail || "N/A"}</p>
//       <p>Office Phone: {professionalDetails?.officePhone || "N/A"}</p>
//       <p>Office City: {professionalDetails?.officeCity || "N/A"}</p>
//       <p>Office Address: {professionalDetails?.officeAddress || "N/A"}</p>
//       <p>Reporting Manager: {professionalDetails?.reportingManager || "N/A"}</p>
//     </div>
//   );
// }

// export default ProfessionalDetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ProfessionalDetails() {
//   const [professionalDetails, setProfessionalDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfessionalDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/employees");

//         console.log("API Response:", response.data); // Debugging step

//         // Check if response is an array and has at least one employee
//         if (Array.isArray(response.data) && response.data.length > 0) {
//           console.log("First Employee Data:", response.data[0]); // Debugging step
//           setProfessionalDetails(response.data[0]); // Select the first employee
//         } else {
//           console.error("Unexpected response format:", response.data);
//           setProfessionalDetails(null);
//         }
//       } catch (error) {
//         console.error("Error fetching professional details:", error);
//         setProfessionalDetails(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessionalDetails();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!professionalDetails) return <div>Error: Professional details not found.</div>;

//   return (
//     <div>
//       <h3>Professional Details</h3>
//       <p>Company Email: {professionalDetails?.companyemail || "N/A"}</p>
//       <p>Office Phone: {professionalDetails?.officephone || "N/A"}</p>
//       <p>Office City: {professionalDetails?.officecity || "N/A"}</p>
//       <p>Office Address: {professionalDetails?.officeaddress || "N/A"}</p>
//       <p>Reporting Manager: {professionalDetails?.reportingmanager || "N/A"}</p>
//     </div>
//   );
// }

// export default ProfessionalDetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ProfessionalDetails() {
//   const [professionalDetails, setProfessionalDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfessionalDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/employees");

//         console.log("Full API Response:", response.data); // Debugging step

//         if (Array.isArray(response.data) && response.data.length > 0) {
//           console.log("First Employee Data:", response.data[0]); // Debugging step
//           setProfessionalDetails(response.data[0]); // Select the first employee
//         } else {
//           console.error("Unexpected response format:", response.data);
//           setProfessionalDetails(null);
//         }
//       } catch (error) {
//         console.error("Error fetching professional details:", error);
//         setProfessionalDetails(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessionalDetails();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!professionalDetails) return <div>Error: Professional details not found.</div>;

//   return (
//     <div>
//       <h3>Professional Details</h3>
//       <p>Company Email: {professionalDetails?.companyemail || "N/A"}</p>
//       <p>Office Phone: {professionalDetails?.officephone || "N/A"}</p>
//       <p>Office City: {professionalDetails?.officecity || "N/A"}</p>
//       <p>Office Address: {professionalDetails?.officeaddress || "N/A"}</p>
//       <p>Reporting Manager: {professionalDetails?.reportingmanager || "N/A"}</p>
//     </div>
//   );
// }

// export default ProfessionalDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeContainer.css"; // Import the CSS


function ProfessionalDetails() {
  const [professionalDetails, setProfessionalDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfessionalDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");

        console.log("Full API Response:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          console.log("First Employee Data:", response.data[0]);
          setProfessionalDetails(response.data[0].professionalDetails); // ✅ Access nested object
        } else {
          console.error("Unexpected response format:", response.data);
          setProfessionalDetails(null);
        }
      } catch (error) {
        console.error("Error fetching professional details:", error);
        setProfessionalDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessionalDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!professionalDetails) return <div>Error: Professional details not found.</div>;

  return (
    <div className="employee-container">
      <h3>Professional Details</h3>
      <p><span>Office Phone:</span> {professionalDetails?.officePhone || "N/A"}</p>
      <p><span>Office City: </span>{professionalDetails?.officeCity || "N/A"}</p>
      <p><span>Office Address:</span> {professionalDetails?.officeAddress || "N/A"}</p>
      <p><span>Reporting Manager:</span> {professionalDetails?.reportingManager || "N/A"}</p>
    </div>
  );
}

export default ProfessionalDetails;
