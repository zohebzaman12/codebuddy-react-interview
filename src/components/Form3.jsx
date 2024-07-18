import { useState } from "react";
import PropTypes from "prop-types";

const Form3 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  //STATES
  const [errors, setErrors] = useState({});
  const [localFormData, setLocalFormData] = useState(formData);

  //FUNCTIONS
  //Function to validate Form inputs
  const validate = () => {
    let formErrors = {};
    const { countryCode, phoneNumber, acceptTermsAndCondition } = localFormData;

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

  //Function to handle Form3 submission
  const handleLocalSubmit = (e) => {
    e.preventDefault();

    const { emailId, password, firstName, address } = formData;
    if (!emailId || !password || !firstName || !address) {
      alert("Please complete all required fields in Step 1 and Step 2.");
      return;
    }
    if (validate()) {
      setFormData(localFormData);
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleLocalSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Country Code:</label>
        <select
          value={localFormData.countryCode}
          onChange={(e) => setLocalFormData({ ...localFormData, countryCode: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        >
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (America)</option>
        </select>
        {errors.countryCode && <span className="text-red-500">{errors.countryCode}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="text"
          value={localFormData.phoneNumber}
          onChange={(e) => setLocalFormData({ ...localFormData, phoneNumber: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
      </div>
      <div className="flex items-center justify-center space-x-2">
        <input
          type="checkbox"
          checked={localFormData.acceptTermsAndCondition}
          onChange={(e) =>
            setLocalFormData({ ...localFormData, acceptTermsAndCondition: e.target.checked })
          }
          className="rounded border p-2"
          name="termsAndCondition"
        />
        <label className="text-gray-700" htmlFor="termsAndCondition">
          Accept Terms and Conditions
        </label>
        {errors.acceptTermsAndCondition && (
          <div className="text-red-500">{errors.acceptTermsAndCondition}</div>
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

Form3.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form3;
