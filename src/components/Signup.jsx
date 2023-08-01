import React from "react";
import "../style/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ fontSize: "1.5rem" }}
      className="d-flex justify-content-center align-items-center bg-secondary vh-100"
    >
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 fnt">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              minLength={3}
              maxLength={10}
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              // name="email"
              className="form-control bg-light"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              required
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
              type={passwordShown ? "text" : "password"}
              required
              pattern="[A-Z]{4,10}"
              placeholder="Enter Password (4 to 10 Uppercase)"
              name="Password"
              className="form-control bg-light outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            &nbsp;
            <span onClick={togglePasswordVisiblity} className="bi bi-eye-fill">
              &nbsp;Show Password
            </span>
          </div>
          <button
            style={{ padding: "1rem", fontSize: "1.5rem" }}
            type="submit"
            className="btn btn-primary w-100"
          >
            Sign up
          </button>
        </form>
        <p>Already have an account?</p>
        <Link
          to="/login"
          style={{ padding: "1rem", fontSize: "1.5rem" }}
          className="btn btn-default border w-100 bg-light text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
