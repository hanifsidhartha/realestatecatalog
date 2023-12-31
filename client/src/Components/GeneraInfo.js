import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../styles/Basicinfo.css";
import ProgressSteps from "../Components/ProgressSteps";

export default function GeneraInfo({isEdit}) {

  const location = useLocation();
  const viewData = location.state;

  const navigate = useNavigate();
  const [fileName, setFileName] = useState("")
  const [formData, setFormData] = useState({
    name: viewData?.name || "",
    mobile: viewData?.mobile || "",
    owner:viewData?.owner ||  "",
    saleType: viewData?.saleType || "",
    postedBy:viewData?.postedBy ||  "",
    featuredPackage: viewData?.featuredPackage || "",
    ppdPackage:viewData?.ppdPackage ||  "",
    photo: viewData?.photo || "",
  });
  const { ppd_id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file?.name)
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData({ ...formData, photo: reader.result });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  const handleSave = () => {
    localStorage.setItem("genralInfo", JSON.stringify(formData));
    navigate(isEdit ? `/layout/location-info/edit/${ppd_id}` : "/layout/location-info", { state: viewData });
  };
  const handleCancel = () => {
    navigate("/layout/property-detail");
  };

  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />

            <label htmlFor="postedBy">Posted By</label>
            <select
              id="postedBy"
              name="postedBy"
              value={formData.postedBy}
              onChange={handleChange}
            >
              <option value="">Posted By</option>
              <option value="Posted By Owner">Posted By Owner</option>
              <option value="Posted By Agent">Posted By Agent</option>
            </select>
            <label htmlFor="featuredPackage">Featured Package</label>
            <select
              id="featuredPackage"
              name="featuredPackage"
              value={formData.featuredPackage}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Highlighted Listings">Highlighted Listings</option>
              <option value="Extended Duration">Extended Duration</option>
            </select>
            <div className="imge" >
              <img
                src={
                  formData.photo
                    ? formData?.photo
                    : "/950796.png"
                }
                alt="pic missing"
              />
              <label htmlFor="addPhoto">{fileName ? fileName : "Add Photo"}</label>
              <input
                type="file"
                id="addPhoto"
                name="addPhoto"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter Mobile Number"
              onChange={handleChange}
              required
            />
            <label htmlFor="saleType">Sale Type</label>
            <select
              id="saleType"
              name="saleType"
              value={formData.saleType}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
            <label htmlFor="ppdPackage">PPD Package</label>
            <select
              id="ppdPackage"
              name="ppdPackage"
              value={formData.ppdPackage}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="Standard">Standard</option>
              <option value="Advanced">Advanced</option>
              <option value="Premium">Premium</option>
              <option value="Custom">Advanced</option>
            </select>
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
