import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      const req_body = {
        email: email,
        password: password,
      };

      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req_body),
      });

      if (response.ok) {
        const response_data = await response.json();
        console.log(response_data);
        if (response_data.code == 200) {
          localStorage.setItem("token", response_data.data.token);
          localStorage.setItem("name", response_data.data.name);
          localStorage.setItem("email", response_data.data.email);
          console.log("Login successful");
          navigate("/layout/home");
          toast.success("Login successful");
          setEmail("");
          setPassword("");
        } else {
          toast.error("Login failed: " + response_data.message);
        }
      } else {
        const response_data = await response.json();
        console.error("Login failed:", response_data.message);
        toast.error("Login failed: " + response_data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error: " + error.message);
    }
  };

  return (
   
};

export default Login;
