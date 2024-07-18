import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Form2 = ({ formData, setFormData, nextStep, prevStep }) => {
  //STATES
  const [errors, setErrors] = useState({});
  const [localFormData, setLocalFormData] = useState(formData);

  //FUNCTIONS

  //Function to validate Form inputs
  const validate = () => {
    let formErrors = {};
    const { firstName, lastName, address } = localFormData;

    // First name validation
    if (!firstName) {
      formErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(firstName) || firstName.length < 2 || firstName.length > 50) {
      formErrors.firstName = "First name must be alphabetic and 2-50 characters long";
    }

    // Last name validation
    if (lastName && !/^[A-Za-z]+$/.test(lastName)) {
      formErrors.lastName = "Last name must be alphabetic";
    }

    // Address validation
    if (!address || address.length < 10) {
      formErrors.address = "Address must be at least 10 characters long";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  //Function to handle Form2 submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData(localFormData);
      nextStep();
    }
  };

  //Function to handle "Save" Button
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
        <label className="block text-gray-700">First Name:</label>
        <input
          type="text"
          value={localFormData.firstName}
          onChange={(e) => setLocalFormData({ ...localFormData, firstName: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Last Name:</label>
        <input
          type="text"
          value={localFormData.lastName}
          onChange={(e) => setLocalFormData({ ...localFormData, lastName: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Address:</label>
        <input
          type="text"
          value={localFormData.address}
          onChange={(e) => setLocalFormData({ ...localFormData, address: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.address && <span className="text-red-500">{errors.address}</span>}
      </div>
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={prevStep}
          className="rounded bg-red-500 px-4 py-2 text-white"
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

Form2.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Form2;
