import React, { useState } from "react";

const Form1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    const { emailId, password } = formData;

    // Email validation
    if (!emailId) {
      formErrors.emailId = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(emailId)) {
      formErrors.emailId = 'Email is invalid';
    }

    // Password validation
    if (!password) {
      formErrors.password = 'Password is required';
    } else {
      const capitalLetters = password.match(/[A-Z]/g) || [];
      const smallLetters = password.match(/[a-z]/g) || [];
      const numbers = password.match(/[0-9]/g) || [];
      const specialChars = password.match(/[^A-Za-z0-9]/g) || [];
      if (capitalLetters.length < 2 || smallLetters.length < 2 || numbers.length < 2 || specialChars.length < 2) {
        formErrors.password = 'Password must contain minimum 2 capital letters, 2 small letters, 2 numbers and 2 special characters';
      }
    }

    setErrors(formErrors);
    console.log(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-gray-700">Email:</label>
      <input
        type="email"
        value={formData.emailId}
        onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
        className="mt-1 block w-full p-2 border rounded"
      />
      {errors.emailId && <span className="text-red-500">{errors.emailId}</span>}
    </div>
    <div>
      <label className="block text-gray-700">Password:</label>
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="mt-1 block w-full p-2 border rounded"
      />
      {errors.password && <span className="text-red-500">{errors.password}</span>}
    </div> 
    <div className="flex space-x-2">
    <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded cursor-not-allowed" disabled>
      Back
    </button>
    <button type="button" onClick={() => console.log('Save clicked')} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
    <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Save and Next</button>
    </div>
  </form>
  );
};

export default Form1;
