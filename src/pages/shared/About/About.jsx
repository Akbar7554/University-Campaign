import React from 'react';
import Navbar from '../Navbar/Navbar';
import myPic from "../../../assets/195306365_330222922046259_6336117042760640101_n.jpg"
import Footer from '../Footer/Footer';

const About = () => {
    return (
      <div>
        <Navbar></Navbar>
        <section className="pt-10 overflow-hidden bg-red-200 md:pt-0 sm:pt-16 2xl:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Hey 👋 I am
                  <br className="block sm:hidden" />
                   Akbar 
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                Student of Programming Hero. Graduated from a University.
                                Try to learning MERN Stack. 
                </p>

                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                    <span className="relative"> Have a question? </span>
                  </span>
                  <br className="block sm:hidden" />
                  Ask me on{" "}
                  <a
                    href="#"
                    title=""
                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                  >
                    Twitter
                  </a>
                </p>
              </div>

              <div className="relative">
                <img
                  className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                  src=""
                  alt=""
                />

                <img
                  className="mb-10 mt-10 rounded-full relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                  src={myPic}
                  alt=""
                />
              </div>
            </div>
          </div>
            </section>
            <Footer></Footer>
      </div>
    );
};

export default About;