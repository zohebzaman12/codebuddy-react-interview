import React from "react";

const TabNav = ({ step, setStep }) => {
  return (
<div className="flex justify-center space-x-4 my-4">
      <button 
        className={`px-4 py-2 ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`} 
        onClick={() => setStep(1)}
      >
        Form 1
      </button>
      <button 
        className={`px-4 py-2 ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`} 
        onClick={() => setStep(2)}
      >
        Form 2
      </button>
      <button 
        className={`px-4 py-2 ${step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`} 
        onClick={() => setStep(3)}
      >
        Form 3
      </button>
    </div>
  );
};

export default TabNav;
