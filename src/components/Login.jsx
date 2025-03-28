import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/user");
    } catch (err) {
      setError("Please try again.");
    }
  };

  return (
    <div className="login-background d-flex align-items-center justify-content-center vh-100">
      <div className="card login-card shadow p-4">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;





