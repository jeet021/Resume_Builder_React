// import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./ContactUs.css";
import "./AboutUs.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((response) => {
        console.log(response);
        if (response.data === "Success") {
          alert("Successfully logged in!");
          localStorage.setItem("userLoggedIn", true);
          // localStorage.setItem("userName", response.data.user.name);
          // Navigating to the dashboard page after successful login
          navigate("/home");
        } else {
          alert("Invalid Email or Password!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("userLoggedIn");
  //   // Redirecting to the login page after logout
  //   navigate("/login");
  // };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <button className="btn btn-link">Register</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center"></div>
    </div>
  );
}

export default Login;
