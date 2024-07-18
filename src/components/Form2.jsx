import React, { useState } from "react";
import { toast } from "react-toastify";

const Form2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  const validate = () => {
    let formErrors = {};
    const { firstName, lastName, address } = formData;

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">First Name:</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Last Name:</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="mt-1 block w-full rounded border p-2"
        />
        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
      </div>
      <div>
        <label className="block text-gray-700">Address:</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
          onClick={() => {
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
          }}
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

export default Form2;
