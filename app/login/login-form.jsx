"use client";

import { useState } from "react";

//client component//
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passworError, setPasswordError] = useState("");

  const validdateForm = () => {
    if(!email) {
      setEmailError("Email is required");
      return false;
    }else{
      setEmailError("");
    }

    if(!password) {
      setPasswordError("Password is required");
      return false;
    }else{
      setPasswordError("");
    }

    //setEmailError("");
    //setPasswordError("");

    return true;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isvalid = validdateForm();
    if(isvalid){
       //Login form data submission//
      console.log("Form Data:", { email: email, password: password });

    }

   
    
  };

  return (
    <div className="w-[380px] mx-auto">
      <div className=" bg-white shadow-md border border-gray-200 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {" "}
          ,
          <h2 className="text-center text-xl font-semibold text-gray-900">
            {" "}
            Sign in to Open University Sri Lanka
          </h2>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-980 block mb-2 "
            >
              Your email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg  text-gray-900 focus:ring-1 focus:ring-offset-2  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="yourname@gmail.com"
            />
            {emailError && <div className="text-red-600 text-sm mt-2 ml-2">{emailError}</div>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-980 block mb-2 "
            >
              Your password
            </label>
            <input
              type="password"
              name="passwoord"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg  text-gray-900 focus:ring-1 focus:ring-offset-2  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="**********"
            />
            {passworError && <div className="text-red-600 text-sm mt-2 ml-2">{passworError}</div>}
          </div>

          {/* Remebber me */}
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>

              <div className="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-meadium text-gray-900"
                >
                  Remember Me
                </label>
              </div>
            </div>

            {/* Forget Password*/}
            <a
              href="/forget-password"
              className="text-sm text-blue-700 font-semibold hover:underline ml-auto"
            >
              Forget Password?
            </a>
          </div>
          
          {/*Sign in Button*/}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-meadium rounded-lg text-sm py-2.5"
          >
            {" "}
            Sign in{" "}
          </button>
          <div className="flex justify-center text-sm font=medium text-gray-500 space-x-1">
            <span> Not Regestered? </span>
            <a href="/regester" className="text-blue-700 hover:underline">
              {" "}
              Create an Account{" "}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
