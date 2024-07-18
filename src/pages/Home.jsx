import { Icon } from "@iconify/react";
import MultiForm from "../components/MultiForm";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div>
        <h1 className="mb-6 flex items-center justify-center text-4xl font-bold">
          <Icon icon="mdi:home" className="mr-2" />
          Home
        </h1>
        <h2 className="mb-6 flex items-center justify-center text-2xl">
          Welcome to the Sign Up page!
        </h2>
        <MultiForm />
      </div>
    </div>
  );
};

export default Home;
