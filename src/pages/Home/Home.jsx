// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "../shared/Banner/Banner";
import Footer from "../shared/Footer/Footer";
import MainContent from "../shared/MainContent/MainContent";
// import Header from "../shared/Header/Header";
// import LeftSideContent from "../shared/LeftSideContent/LeftSideContent";
import Navbar from "../shared/Navbar/Navbar";
// import RightSideContent from "../shared/RightSideContent/RightSideContent";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <h2 className="text-6xl font-oswald">Home</h2> */}
      <div>
        {/* <div className="border">
            <LeftSideContent></LeftSideContent>
          </div> */}
        <div className="p-5 grid gap-5 grid-cols-1  md:grid-cols-2">
          {data.map((myData) => (
            <MainContent key={myData._id} data={myData}></MainContent>
          ))}
        </div>
        {/* <div className="border">
            <RightSideContent></RightSideContent>
          </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
