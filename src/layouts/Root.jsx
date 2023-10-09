// import React from 'react';
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
      <div className=" font-oswald">
        {/* <ToastContainer></ToastContainer> */}
        <Outlet></Outlet>
        <Toaster />
        <ToastContainer />
      </div>
    );
};

export default Root;