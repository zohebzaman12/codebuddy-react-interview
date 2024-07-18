import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TabNav from "./TabNav";

const MultiForm = () => {
  //STATES
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });

  //REACT-ROUTER NAVIGATION
  const navigate = useNavigate();

  //FUNCTIONS

  //Functions to handle moving from one form to another
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //Function to handle POST request to API
  const handleSubmit = () => {
    const { ...dataToSubmit } = formData;
    fetch("https://codebuddy.review/submit", {
      method: "POST",
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Redirect to /posts
        toast.success("Form submitted successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 text-gray-900 shadow-lg ">
      <TabNav step={step} setStep={setStep} />
      {step === 1 && <Form1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && (
        <Form2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Form3
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiForm;
