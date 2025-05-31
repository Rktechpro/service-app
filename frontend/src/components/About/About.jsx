import React from "react";
import bikeServiceImage from "../../assets/image/man.jpg";

const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="w-5 h-5 bg-red-600 mb-4 rotate-45"></div>
          <span className=" text-3xl font-semibold text-[#1E2939]">
            About Us
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            A Reputation of 5 Years in the Making
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Bharat Automobile Services is dedicated to providing premium quality
            care for your two-wheelers at affordable pricing. We offer real-time
            updates for all your bike maintenance and repair needs, with a
            transparent and fair pricing system.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Our skilled technicians, operating in state-of-the-art workshops
            with advanced tools and OEM parts, ensure your bike receives
            top-tier service—every time. Trust us for expert care, prompt
            service, and peace of mind on every ride.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Whether it's routine maintenance or complex repairs, we are here to
            keep your bike running smoothly and efficiently. Experience the
            difference with Bharat Automobile Services.
          </p>
          <div className="mt-6">
            <button className="bg-[#FF6900] p-4 text-[#00DF9A] rounded-md uppercase border-none outline-none cursor-pointer transition-all hover:bg-amber-200  ">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={bikeServiceImage}
            alt="Bike Repair"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
