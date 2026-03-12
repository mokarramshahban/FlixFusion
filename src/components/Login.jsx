import React, { useState, useRef } from "react";
import BG_IMAGE from "../assets/images/login-bg.jpg";
import Header from "./Header";
import { checkValidDataSignIn, checkValidDataSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // validate email & password
    if (isSignIn) {
      const message = checkValidDataSignIn(
        email.current.value,
        password.current.value,
      );
      setErrorMessage(message);
      if (message) return;

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      const message = checkValidDataSignUp(
        name.current.value,
        email.current.value,
        password.current.value,
      );
      setErrorMessage(message);
      if (message) return;

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignInSignUpToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute h-full w-full overflow-hidden">
        <img className="" src={BG_IMAGE} alt="background" />
      </div>
      <div className="bg-black/60 h-full w-full absolute">
        <div className="p-12 absolute bg-black/70 text-stone-50 w-full sm:w-6/12 md:w-4/12 mx-auto my-45 left-0 right-0 rounded-lg">
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="flex flex-col items-center"
          >
            <h1 className="text-white text-3xl m-2 w-full text-left font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={name}
                className="m-4 p-3 bg-gray-700 w-full rounded-md"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="m-4 p-3 bg-gray-700 w-full rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="m-4 p-3 bg-gray-700 w-full rounded-md"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-600 font-bold text-lg py-2">
              {errorMessage}
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-red-700 m-4 p-3 w-full rounded-lg hover:scale-95 transition-all duration-200"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="py-4 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={handleSignInSignUpToggle}
            >
              {isSignIn
                ? "New to Netflix? Sign up now"
                : "Already registered? Sign in now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
