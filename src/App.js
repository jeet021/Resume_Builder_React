import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import PdfComponent from "./components/PdfComponent";
import AboutUs from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import "./ContactUs.css";
import "./AboutUs.css";
import "./feedback.css";
import SignUp from "./signup.js";
import Login from "./login.js";
import Navigation from "./components/Navigation.js";
import Feedback from "./components/Feedback.js";
import './App.css';

function App() {
  return (
    <Container fluid className="bg-white p-0">
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/preview" element={<PdfComponent />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Resume />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
