// import React from 'react';

import { Link } from "react-router-dom";

const MainContent = ({ data }) => {
  const { name, image_url, details, price, _id } = data;
  return (
    <div className="">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-red-100 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-72 md:rounded-none md:rounded-l-lg"
          src={image_url}
          alt=""
        />
        <div className="w-[500px] flex flex-col justify-between p-10 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {details.length > 150 ? (
              <p>
                {details.slice(0, 150)} <Link to={`/data/${_id}`}>......</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </p>
          <div className="flex items-center justify-between gap-10">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/data/${_id}`}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <div></div>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Details
              </span>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MainContent;






