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
        className={`bg-gradient-to-r bg-[#000002]  h-20 w-full  flex items-center justify-between px-4 sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-white font-bold">
            <Link to="/">
              <span className="text-green-400">Bharat </span>
              <span className="text-orange-500">Automobile Service</span>
            </Link>
          </h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 mr-4 text-white font-semibold text-lg ">
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
            <button className="border-2 border-[#142E38]  px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-[#FF6900] hover: text-[#11E4C1] transition duration-300 cursor-pointer hover:uppercase ">
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
        className={`fixed top-0 left-0 h-full w-64 bg-[#000002] z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-indigo-500">
          <h2 className="text-2xl text-white font-bold">
            <Link to="/">
              <span className="text-green-400">B</span>
              <span className="text-orange-500">AS</span>
            </Link>
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
          {menu.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className="hover:text-[#F717E1] transition-colors"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            );
          })}
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
    </>
  );
};

export default Layout;
