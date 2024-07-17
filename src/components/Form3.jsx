import React, { useState } from "react";

const Form3 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    const { countryCode, phoneNumber, acceptTermsAndCondition } = formData;

    // Country code validation
    if (!countryCode || (countryCode !== "+91" && countryCode !== "+1")) {
      formErrors.countryCode = "Country code must be +91 (India) or +1 (America)";
    }

    // Phone number validation
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be a 10-digit numeric value";
    }

    // Terms and conditions validation
    if (!acceptTermsAndCondition) {
      formErrors.acceptTermsAndCondition = "You must accept the terms and conditions";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      handleSubmit();
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Country Code:</label>
        <select
          value={formData.countryCode}
          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
          placeholder="Select country code"
        >
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <span className="text-red-500">{errors.countryCode}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="termsAndCondition">
          Accept Terms and Conditions
        </label>
        <input
          type="checkbox"
          checked={formData.acceptTermsAndCondition}
          onChange={(e) => setFormData({ ...formData, acceptTermsAndCondition: e.target.checked })}
          className="mt-1 block w-full rounded border p-2"
          name="termsAndCondition"
        />
        {errors.acceptTermsAndCondition && (
          <span className="text-red-500">{errors.acceptTermsAndCondition}</span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={prevStep}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Back
        </button>
        <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
          Save
        </button>
        <button
          type="button"
          className="cursor-not-allowed rounded bg-gray-500 px-4 py-2 text-white"
          disabled
        >
          Save and Next
        </button>
      </div>
    </form>
  );
};

export default Form3;
