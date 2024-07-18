import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Form1 = ({ formData, setFormData, nextStep }) => {
  //STATES
  const [errors, setErrors] = useState({});
  const [localFormData, setLocalFormData] = useState(formData);

  //FUNCTIONS

  //Function to validate Form inputs
  const validate = () => {
    let formErrors = {};
    const { emailId, password } = localFormData;

    // Email validation
    if (!emailId) {
      formErrors.emailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailId)) {
      formErrors.emailId = "Email is invalid";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
    } else {
      const capitalLetters = password.match(/[A-Z]/g) || [];
      const smallLetters = password.match(/[a-z]/g) || [];
      const numbers = password.match(/[0-9]/g) || [];
      const specialChars = password.match(/[^A-Za-z0-9]/g) || [];
      if (
        capitalLetters.length < 2 ||
        smallLetters.length < 2 ||
        numbers.length < 2 ||
        specialChars.length < 2
      ) {
        formErrors.password =
          "Password must contain minimum 2 capital letters, 2 small letters, 2 numbers and 2 special characters";
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  //Function to handle Form 1 Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData(localFormData);
      nextStep();
    }
  };

  //Function to handle "Save Button"
  const handleSave = () => {
    if (validate()) {
      setFormData(localFormData);
      toast.success("Form saved!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={localFormData.emailId}
          onChange={(e) => setLocalFormData({ ...localFormData, emailId: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.emailId && <span className="text-red-500">{errors.emailId}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          value={localFormData.password}
          onChange={(e) => setLocalFormData({ ...localFormData, password: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}
      </div>
      <div className="flex justify-center space-x-2">
        <button
          type="button"
          className="cursor-not-allowed rounded bg-gray-500 px-4 py-2 text-white"
          disabled
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Save
        </button>
        <button type="submit" className="rounded bg-green-500 px-4 py-2 text-white">
          Save and Next
        </button>
      </div>
    </form>
  );
};

Form1.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Form1;
