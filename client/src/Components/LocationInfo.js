import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../Components/ProgressSteps";

export default function LocationInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    navigate("/layout/basicinfo");
  };
  const handleCancel = () => {
    navigate("/layout/general-info");
  };
  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />

            <label htmlFor="area">Area</label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="">Select Area</option>
              <option value="Area1">Area1</option>
              <option value="Area2">Area2</option>
              {/* Add more area options as needed */}
            </select>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
            />
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              placeholder="Latitude"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              <option value="City1">City1</option>
              <option value="City2">City2</option>
              {/* Add more city options as needed */}
            </select>

            <label htmlFor="pincode">Pincode</label>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value="">Select Pincode</option>
              <option value="Pincode1">Pincode1</option>
              <option value="Pincode2">Pincode2</option>
              {/* Add more pincode options as needed */}
            </select>

            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              placeholder="Landmark"
              onChange={handleChange}
            />

            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              placeholder="Longitude"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleCancel}>Previous</button>
          <button onClick={handleSave}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
}