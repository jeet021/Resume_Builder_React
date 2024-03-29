import React, { useState } from 'react';
import axios from "axios";

const Feedback = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [appUsage, setAppUsage] = useState("");
  const [appFeatures, setAppFeatures] = useState("");
  const [appImprovement, setAppImprovement] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "appusage") {
      setAppUsage(value);
    } else if (name === "appfeatures") {
      setAppFeatures(value);
    } else if (name === "appimprovement") {
      setAppImprovement(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addfeedbackdata", { name, phone, appUsage, appFeatures, appImprovement })
      .then((response) => {
        console.log(response);
        alert("Your Message has been sent successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="app">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appusage:
          <textarea
            name="appusage"
            value={appUsage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appfeatures:
          <textarea
            name="appfeatures"
            value={appFeatures}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appimprovement:
          <textarea
            name="appimprovement"
            value={appImprovement}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
