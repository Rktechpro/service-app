import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaicon = [
    {
      icon: <Facebook className="hover:text-blue-400" />,
      link: "#",
    },
    {
      icon: <Instagram className="hover:text-pink-500" />,
      link: "#",
    },
    {
      icon: <Youtube className="hover:text-red-500" />,
      link: "#",
    },
    {
      icon: <Linkedin className="hover:text-blue-300" />,
      link: "#",
    },
  ];
  const QuickLinks = [
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Feedback",
      link: "#",
    },
    {
      name: "Privacy",
      link: "#",
    },
    {
      name: " Service",
      link: "#",
    },
  ];
  const ContactInfo = [
    {
      name: "Address",
      icon: <Map className="mr-2 mt-1 text-7xl" />,
      info: '"Samay", 6-Archna Park, Nr. Dholakia School, Sadhu Vaswani Road, Rajkot - 360005',
    },
    {
      name: "Email",
      icon: <Mail className="mr-2 text-xl" />,
      info: "bharatautomobileservice@email.com",
    },
    {
      name: "Phone",
      icon: <Phone className="mr-2" />,
      info: "1800 1234 108",
    },
  ];
  return (
    <div className="text-white bg-[#111]">
      {/* Newsletter */}
      <div className="bg-white text-black py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe News Letter & Get Company News
        </h2>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Info Section */}
      <div className="bg-no-repeat bg-left bg-contain py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Description */}
          <div>
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-green-400">Bharat </span>
              <span className="text-orange-500">Automobile Service</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bharat Automobile Service is a leading company providing
              Automobile solutions across India. We offer Home Service,
              Breakdown Support, Accidental Facilities, and Maintenance for all
              2-wheelers.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 text-xl">
              {socialMediaicon.map((item, index) => {
                return (
                  <Link to={item.link} key={index}>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {QuickLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.link} className="hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {ContactInfo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center">
                    {item.icon}
                    <span>{item.info}</span>
                  </li>
                );
              })}
            </ul>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full">
              Book An Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 bg-black text-gray-400 text-sm">
        © {new Date().getFullYear()} Bharat Automobile Service. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
