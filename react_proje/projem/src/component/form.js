import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  const [savedData, setSavedData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    setSavedData([...savedData, { firstName: formData.firstName, lastName: formData.lastName }]);
    setFormData({ firstName: "", lastName: "", age: "", email: "" });
  };

  return (
    <div>
      <h2>Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label>İsim:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Soyisim:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Yaş:</label>
          <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
      </div>
      <button onClick={handleSave}>Kaydet</button>
      <hr />
      
      {savedData.map((data, index) => (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      ))}
    </div>
  );
}

export default Form;