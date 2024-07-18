import { ToastContainer } from "react-toastify";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
