import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Skills from './components/Skills';
import axios from '../src/utils/axios';

const App = () => {
  const [activeTab, setActiveTab] = useState('form');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
  setFormData(data); // Just update formData
  setIsFormSubmitted(true);
  setActiveTab('skills'); // Move to skills tab
};

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setActiveTab('form')}
        >Form</button>
        <button
          onClick={() => isFormSubmitted && setActiveTab('skills')}
          disabled={!isFormSubmitted}

        >
          Skills
        </button>
      </div>

      <div>
        {activeTab === 'form' && (
          <Form
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
          />
        )}
        {activeTab === 'skills' && (
          <Skills
            formData={formData}
            setFormData={setFormData}
            goBack={() => setActiveTab('form')}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default App;
