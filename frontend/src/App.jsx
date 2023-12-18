import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

const initialFormData = {
  name: "",
  age: "",
  selectedBatch: "",
  fees: false,
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeCheck = (e) => {
    //console.log(e.target.checked);
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "https://yogaflex.onrender.com/getData",
        formData
      );
      console.log(response.data);
      setFormData(initialFormData);
      CompletePayment();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const CompletePayment = () => {
    window.alert("Payment is successful!!!\nForm submitted successfully!");
  }

  return (
    <div className="form-container">
      <h1>Yoga Class Admission Form</h1>
      <form onSubmit={handleSubmit} className="admission-form">
        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Select Batch:</label>
          <select
            name="selectedBatch"
            value={formData.selectedBatch}
            onChange={handleChange}
            required
          >
            <option value="6-7AM">6-7 AM</option>
            <option value="7-8AM">7-8 AM</option>
            <option value="8-9AM">8-9 AM</option>
            <option value="5-6PM">5-6 PM</option>
          </select>
        </div>

        <div className="check">
          <label>Fees Paid 500Rs:</label>
          <input
            type="checkbox"
            name="fees"
            checked={formData.fees}
            onChange={handleChangeCheck}
          />
        </div>

        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
