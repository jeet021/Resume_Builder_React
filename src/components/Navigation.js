import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";



function Navigation() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";
    setUserLoggedIn(loggedIn);
    if (loggedIn) {
      const name = localStorage.getItem("userName");
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    alert("Successfully logged out!");
    setUserLoggedIn(false);
  };

  return (
    <Navbar bg="light" variant="light" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/home" className="text-decoration-none text-black">
            Resume Builder
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/home" className="mx-2 text-decoration-none text-black">
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="mx-2 text-decoration-none text-black"
          >
            About
          </NavLink>
          <NavLink
            to="/contactus"
            className="mx-2 text-decoration-none text-black"
          >
            ContactUs
          </NavLink>
          <NavLink
            to="/feedback"
            className="mx-2 text-decoration-none text-black"
          >
            Feedback
          </NavLink>
        </Nav>
        {userLoggedIn && (
          <Nav>
            <Nav.Link
              onClick={handleLogout}
              className="text-decoration-none text-black"
            >
              Logout
            </Nav.Link>
          </Nav>
        )}
        {userLoggedIn && (
          <Nav>
            <Nav.Item className="text-black">Welcome, {userName}</Nav.Item>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default Navigation;
