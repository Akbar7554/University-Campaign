// import React from 'react';

import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
// import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../shared/Footer/Footer";
// import { data, data } from "autoprefixer";

const EventDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const data = datas.find((data) => data._id == id);
  console.log(data);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              {data.name}
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              {data.details}
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-2xl bg-red-500 text-white border-2 border-red-500">
                {data.price}$
              </button>
              <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-xl bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white">
                Get Ticket
              </button>
            </div>
          </div>
          <div className="w-full mb-5 md:w-1/2 flex justify-center md:justify-end">
            <img src={data.image_url} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EventDetails;
