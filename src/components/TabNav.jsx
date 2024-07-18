import { FaAddressCard, FaPhone, FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const TabNav = ({ step, setStep }) => {
  const getProgressBarClasses = (stepIndex) => {
    return `flex h-2.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap text-center text-xs text-white transition duration-500 ${
      stepIndex <= step ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-300 dark:bg-neutral-600"
    }`;
  };

  return (
    <>
      <div className="mx-auto my-4 flex w-full max-w-lg justify-center">
        <div className="flex w-full items-center gap-x-1">
          <div
            className={getProgressBarClasses(1)}
            role="progressbar"
            aria-valuenow="33"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className={getProgressBarClasses(2)}
            role="progressbar"
            aria-valuenow="66"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className={getProgressBarClasses(3)}
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="my-6 flex justify-center space-x-4">
        <button
          className={`mx-1 flex flex-col items-center px-4 py-2 ${
            step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }  shadow-md hover:bg-blue-400`}
          onClick={() => setStep(1)}
          aria-label="Step 1"
        >
          <FaUser className="mb-1" />
          <span className="text-xs">Step 1</span>
        </button>
        <button
          className={`mx-1 flex flex-col items-center px-4 py-2 ${
            step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
          }  shadow-md hover:bg-blue-400`}
          onClick={() => setStep(2)}
          aria-label="Step 2"
        >
          <FaAddressCard className="mb-1" />
          <span className="text-xs">Step 2</span>
        </button>
        <button
          className={`mx-1 flex flex-col items-center px-4 py-2 ${
            step === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
          }  shadow-md hover:bg-blue-400`}
          onClick={() => setStep(3)}
          aria-label="Step 3"
        >
          <FaPhone className="mb-1" />
          <span className="text-xs">Step 3</span>
        </button>
      </div>
    </>
  );
};

TabNav.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default TabNav;
