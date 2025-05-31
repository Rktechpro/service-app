import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className=" h-screen bg-gradient-to-r from-indigo-700 to-purple-600 flex items-center bg-[url(/black.jpg)] bg-no-repeat  justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-[#00DF9A]">
            Welcome to <span className="text-[#FF6900]">Bharat</span> Automobile
            Service
          </h1>
          <p className="  sm:text-xl md:text-2xl lg:text-1xl mb-4 max-w-1xl mx-auto text-[#ddd3eb] bg-opacity-50 p-4 ">
            Experience the best in automobile service and repair. Our expert
            team is here to ensure your vehicle runs smoothly and efficiently.
            From routine maintenance to complex repairs, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/doc"
              className="bg-[#FF6900] text-[#00DF9A] px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-100 transition duration-300"
            >
              Book An Appointment
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-[#1B2E35] px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#11E4C1] transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
