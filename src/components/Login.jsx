import React from "react";
import BG_IMAGE from "../assets/images/login-bg.jpg";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute h-full w-full overflow-hidden">
        <img className="" src={BG_IMAGE} alt="background" />
      </div>
      <div className="bg-black/60 h-full w-full absolute">
        <div className="p-12 absolute bg-black/70 text-stone-50 w-full sm:w-6/12 md:w-4/12 mx-auto my-45 left-0 right-0 rounded-lg">
          <form action="" className="flex flex-col items-center">
            <h1 className="text-white text-3xl m-2 w-full text-left font-bold">
              Sign In
            </h1>
            <input
              className="m-4 p-3 bg-gray-700 w-full rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
              className="m-4 p-3 bg-gray-700 w-full rounded-md"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-700 m-4 p-3 w-full rounded-lg">
              Sign In
            </button>
            <p className="py-4">New to Netflix? Sign up now</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
