// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import loginBanner from "../../assets/undraw_access_account_re_8spm.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in login page", location);
    const handleSignIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      console.log(email, password);
      signIn(email, password)
        .then(result => {
          console.log(result.user);

          navigate(location?.state ? location.state : "/")
        })
        .catch(error => { console.error(error); })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-gradient-to-r from-[#ec6f66] to-[#ff5e62]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:mb-10 lg:mb-0 lg:ml-56 lg:text-left">
            <h1 className="text-5xl mb-5 md:my-5 md:text-center text-center font-bold text-white">
              Sign In now!
            </h1>
            <img className="md:h-[440px]" src={loginBanner} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Enter account information...
                </h1>
                <form
                  onSubmit={handleSignIn}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Enter Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@Company.com"
                      required="required"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Enter Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="•••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="required"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required="required"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 text-md dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-[#ec6f66] to-[#ff5e62] hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/signUp"
                      href="#"
                      className="font-bold text-primary-900 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
