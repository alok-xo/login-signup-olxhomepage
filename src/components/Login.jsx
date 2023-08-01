import React from "react";
import "../style/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {email, password })
      .then(result => {
        console.log(result)
        if(result.data === 'Success') {
          navigate("/home")
        }        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ fontSize: "1.5rem" }}
      className="d-flex justify-content-center align-items-center bg-secondary vh-100"
    >
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control bg-light"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="Password"
              className="form-control bg-light outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            style={{ padding: "1rem", fontSize: "1.5rem" }}
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link to='/' style={{ padding: "1rem", fontSize: "1.5rem" }} className="btn btn-default border w-100 bg-light text-decoration-none">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
