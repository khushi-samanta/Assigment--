import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Edit.css"; // Import the separated CSS file

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
   
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    } catch (error) {
      setError("Failed to load user data");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      alert("User updated successfully");
      navigate("/user");
    } catch (error) {
      setError("Failed to update user.");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="edit-container">
      <div className="card edit-card">
        <h2 className="edit-title">Edit User</h2>
        {error && <div className="alert alert-danger edit-error">{error}</div>}
        <form onSubmit={handleUpdate}>
          <div className="form-group mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email"
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
