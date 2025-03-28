import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserList.css"; // Import the custom CSS

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert("User deleted successfully");
    } catch (error) {
      alert("Failed to delete user");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container py-5 userlist-container">
      <div className="userlist-header d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h2>Users List</h2>
        <div>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
      <div className="row">
        {users.map(user => (
          <div key={user.id} className="col-md-4 user-card">
            <div className="card h-100 shadow-sm">
              <img 
                src={user.avatar} 
                className="card-img-top rounded-circle mx-auto mt-3" 
                alt={user.first_name} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                <p className="card-text text-muted">{user.email}</p>
                <div className="d-flex justify-content-around mt-3">
                  <button 
                    onClick={() => navigate(`/edit/${user.id}`)} 
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id)} 
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1} 
          className="btn btn-secondary mr-2"
        >
          Prev
        </button>
        <span className="font-weight-bold">
          Page {page} of {totalPages}
        </span>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages} 
          className="btn btn-secondary ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;

