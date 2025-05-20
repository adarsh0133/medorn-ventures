import React from 'react';
import axios from '../utils/axios'; 

const Skills = ({ formData, goBack, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.skills.trim() === "") {
      alert("Please fill in your skills.");
      return;
    }

    try {
      
      console.log("Submitting full data:", formData);
      const res = await axios.post('/user/create', formData);
      console.log("Submitted:", res.data);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>Skills</h2>
      <div>
        <label htmlFor="skills">Skills:</label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        ></textarea>
      </div>
      <button onClick={goBack} style={{ marginTop: '1rem', marginRight: '1rem' }}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Skills;
