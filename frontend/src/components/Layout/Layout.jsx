import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignLeft } from "lucide-react";

const Layout = () => {
  //menu
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Service",
      link: "/service",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Navbar */}
      <div
        className={`bg-gradient-to-r bg-[#FFFFFC]  h-20 w-full  flex items-center justify-between px-4 sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-white font-bold">
            <Link to="/">
              <span className="text-[#F717E1]">Bharat </span>
              <span className="text-[#142E38]">Automobile Service</span>
            </Link>
          </h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 mr-4 font-semibold text-lg ">
          {menu.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  to={item.link}
                  className="hover:text-[#F717E1] transition-colors"
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
          <Link to="/" className="">
            <button className="border-2 border-[#142E38]  px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-[#e93cf2] hover: text-[#11E4C1] transition duration-300 cursor-pointer hover:uppercase ">
              Book An Appointment
            </button>
          </Link>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#df2fc2] focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <AlignLeft />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-700 to-purple-600 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-indigo-500">
          <h2 className="text-xl text-white font-bold">
            <span className="text-[#F717E1]">Rk</span>tech
          </h2>
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <AlignLeft className="transform rotate-180" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-white font-semibold text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-[#F717E1] transition-colors"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#F717E1] transition-colors"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/components"
              className="hover:text-[#F717E1] transition-colors"
              onClick={toggleSidebar}
            >
              Components
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="hover:text-[#F717E1] transition-colors"
              onClick={toggleSidebar}
            >
              Service
            </Link>
          </li>
        </ul>
      </div>
      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-indigo-700 to-purple-600 flex items-center bg-[url(/back.jpg)] bg-no-repeat justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-[#142E38]">
            Welcome to <span className="text-[#F717E1]">Bharat</span> Automobile Service
          </h1>
          <p className="  sm:text-xl md:text-2xl lg:text-1xl mb-4 max-w-1xl mx-auto text-[#171021] bg-opacity-50 p-4 ">
            Experience the best in automobile service and repair. Our expert
            team is here to ensure your vehicle runs smoothly and efficiently.
            From routine maintenance to complex repairs, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/doc"
              className="bg-white text-[#11E4C1] px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-100 transition duration-300"
            >
              Book An Appointment
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-[#1B2E35] px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#11E4C1] transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
