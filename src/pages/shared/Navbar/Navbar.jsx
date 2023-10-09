// import React from 'react';
import { Link, NavLink } from "react-router-dom";
import campusLogo from "../../../assets/campuslogo.png";
import userProfile from "../../../assets/userprofile.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {

  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      // textDecoration: isActive ? "overline" : "none",
      color: isActive ? "white" : "normal",
    }
  }

  const { user, userSignOut, createUser } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => { console.error(error) });
  };
  
  
  return (
    <div className="bg-gradient-to-r from-[#ec6f66] to-[#ff5e62]">
      <nav className=" dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div href="" className="flex items-center h-10">
            <img src={campusLogo} className="w-40 mr-3" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </div>
          <div className="flex items-center md:order-2">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user.displayName}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>{ user.email}</a>
                  </li>
                  <li>
                    <Link to="/signIn" onClick={handleSignOut}>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full">
                <img className="w-10 h-10 rounded-full" src={userProfile} />
              </div>
            )}
          </div>
          <div
            className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="text-xl flex  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-md  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <NavLink
                  style={NavLinkStyle}
                  to="/"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:hover:bg-transparent md:hover:text-white  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={NavLinkStyle}
                  to="/about"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={NavLinkStyle}
                  to="/services"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={NavLinkStyle}
                  to="/pricing"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={NavLinkStyle}
                  to="/contact"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
