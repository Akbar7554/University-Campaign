// import React from 'react';

import Navbar from "../shared/Navbar/Navbar";
import SignUpBanner from "../../assets/undraw_team_work_k-80-m.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const navigate = useNavigate();


  // google sign in
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        navigate(location?.state ? location.state : "/");
        console.log(user);
        toast.success("Account Created Successfully!");
    })
      .catch(error => {
      console.error(error);
    }) 
  }

  const handleSignUp = (e) => {
    
    e.preventDefault();
    console.log(e.currentTarget);
    // const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    // const image = form.get("image");
    // const email = form.get("email");
    // const password = form.get("password");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    console.log(name, image, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        if (result.user) {
          updateUserProfile({
            displayName: name,
            photoURL: image
          })
          .then(() => console.log("updated"))
        .catch()
        }
         
      })
    .catch()


    // setSignUpError("");
    // signUpSuccess("");

    if (password.length < 6) {
      toast.error("password must be at least 6 characters long!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    }
    else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "password must be one special character and upper case letter!",
        {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }
      
      
      
      
      // if (
      //   !/^(?![A-Z])(?!.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/]).{1,5}$/.test(
      //     password
      //   )
      // ) {
      //   // const [error, setError] = useState("");

      //   setError("Minimum six character, 1 special and 1 Uppercase Letter");
      // } else {
      //   setError("");
      //   if (email) {
      //     createUser(email, password).then((result) => {
      //       console.log(result.user);
      //     });
      //   }
      // }
    setSignUpError("");
    setSignUpSuccess("");

    // Creating User
      createUser(email, password)
          .then((result) => {
            console.log(result.user);
            setSignUpSuccess(setSignUpSuccess);
        navigate(location?.state ? location.state : "/");
            toast.success("Account Created Successfully", {
              style: {
                padding: "16px",
                color: "white",
                backgroundColor: "rgb(74 222 128)",
              },
              iconTheme: {
                primary: "black",
                secondary: "#FFFAEE",
              },
            });
          })
          .catch(error => {
            console.error(error);
            setSignUpError(error.message);
            toast.error("Account Already In Use Try Another One!", {
              style: {
                padding: "16px",
                color: "white",
                backgroundColor: "rgb(239 68 68)",
              },
              iconTheme: {
                primary: "black",
                secondary: "#FFFAEE",
              },
            });
      })
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:mr-56 lg:text-left">
            <h1 className="text-5xl text-[#ec6a61] text-center font-bold">
              New here!
            </h1>
            <img className="md:h-[500px]" src={SignUpBanner} alt="" />
          </div>
          <div className="w-full bg-gradient-to-r from-[#ec6f66] to-[#ff5e62] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an Account
              </h1>
              <form
                onSubmit={handleSignUp}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-lg font-medium text-gray-100 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Name"
                    required="required"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image URL"
                    className="block mb-2 text-lg font-medium text-gray-100 dark:text-white"
                  >
                    Image URL
                  </label>
                  <input
                    type="img"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter URL"
                    required="required"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-gray-100 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="required"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg font-medium text-gray-100 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="required"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required="required"
                    />
                  </div>
                  <div className="ml-3 text-sm ">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-50 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-[#ff5e62] bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg font-semibold text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-lg font-light text-gray-200 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/signIn"
                    href="#"
                    className="font-bold text-white hover:underline dark:text-primary-500"
                  >
                    Sign In here
                  </Link>
                </p>
              </form>
              {/* {signUpError && <p className="text-red-600">{signUpError}</p>}
              {signUpSuccess && <p className="text-green-600">{signUpSuccess}</p>} */}
            </div>
            <div className="space-y-3 md:pl-5 pb-5">
              <div className="ml-2 md:flex gap-5 items-center">
                <h2 className="text-xl text-white font-bold text-center">
                  SignUp With
                </h2>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-info w-32 border-2  border-sky-500"
                >
                  <FcGoogle className="text-xl"></FcGoogle>Google
                </button>
                <button className="btn btn-outline w-32 border-2">
                  <FaGithub className="text-xl"></FaGithub>Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
