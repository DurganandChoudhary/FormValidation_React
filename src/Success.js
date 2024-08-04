import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div>
      <h2>Registration Successful</h2>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>
          Phone No.: {formData.phoneCode} {formData.phoneNumber}
        </li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>PAN No.: {formData.panNo}</li>
        <li>Aadhar No.: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default Success;
