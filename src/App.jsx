import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UserList from "./components/UserList";
import Edit from "./components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;


