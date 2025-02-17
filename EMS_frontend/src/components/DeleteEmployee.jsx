import { useEffect, useState } from "react";
import { deleteEmployee, getEmployeeById } from "../api";
import { useParams, useNavigate } from "react-router-dom";

function DeleteEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployeeById(id).then((response) => {
      setEmployee(response.data);
    });
  }, [id]);

  const handleDelete = async () => {
    await deleteEmployee(id);
    navigate("/view");
  };

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete:</p>
      <p><strong>{employee.personalDetails.fullName}</strong></p>
      <p>Employee ID: {employee.personalDetails.employeeId}</p>
      <p>Email: {employee.personalDetails.companyEmail}</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/view")}>Cancel</button>
    </div>
  );
}

export default DeleteEmployee;
