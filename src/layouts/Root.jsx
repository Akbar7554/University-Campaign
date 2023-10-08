// import React from 'react';
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { ToastContainer} from "react-toastify";


const Root = () => {
    return (
      <div className=" font-oswald">
        {/* <ToastContainer></ToastContainer> */}
        <Toaster />
        <Outlet></Outlet>
      </div>
    );
};

export default Root;