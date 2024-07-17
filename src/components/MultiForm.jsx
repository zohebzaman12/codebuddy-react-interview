import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const MultiForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const { acceptTermsAndCondition, ...dataToSubmit } = formData;
    console.log(dataToSubmit);
    fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Redirect to /posts
        window.location.href = '/posts';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && <Form1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && (
        <Form2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && <Form3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit}/>}
    </div>
  );
};

export default MultiForm;
