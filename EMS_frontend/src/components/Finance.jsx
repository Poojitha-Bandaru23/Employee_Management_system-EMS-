// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Finance() {
//   const [finance, setFinance] = useState([]);

//   useEffect(() => {
//     const fetchFinanceDetails = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await axios.get("http://localhost:8080/api/employees", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setFinance(response.data);
//       } catch (error) {
//         console.error("Error fetching finance details", error);
//       }
//     };

//     fetchFinanceDetails();
//   }, []);

//   if (!finance) return <div>Loading...</div>;

//   return (
//     <div>
//       <h3>Finance Details</h3>
//       <p>Pan Card: {finance.panCard}</p>
//       <p>Aadhar Card: {finance.aadharCard}</p>
//       <p>Bank Name: {finance.bankName}</p>
//       <p>Branch: {finance.branch}</p>
//       <p>IFSC Code: {finance.ifscCode}</p>
//       <p>CTC Breakup: {finance.ctcBreakup}</p>
//     </div>
//   );
// }

// export default Finance;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeContainer.css"; // Import the CSS

function Finance() {
  const [finance, setFinance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinanceDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");

        console.log("Full API Response:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          console.log("First Employee Data:", response.data[0]);
          setFinance(response.data[0].finance); // ✅ Access nested `finance` object
        } else {
          console.error("Unexpected response format:", response.data);
          setFinance(null);
        }
      } catch (error) {
        console.error("Error fetching finance details:", error);
        setFinance(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFinanceDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!finance) return <div>Error: Finance details not found.</div>;

  return (
    <div className="employee-container">
      <h3>Finance Details</h3>
      <p><span>Pan Card: </span>{finance?.panCard || "N/A"}</p>
      <p><span>Aadhar Card: </span>{finance?.aadharCard || "N/A"}</p>
      <p><span>Bank Name: </span>{finance?.bankName || "N/A"}</p>
      <p><span>Branch: </span>{finance?.branch || "N/A"}</p>
      <p><span>IFSC Code: </span>{finance?.ifscCode || "N/A"}</p>
      <p><span>CTC Breakup: </span>{finance?.ctcBreakup || "N/A"}</p>
    </div>
  );
}

export default Finance;
