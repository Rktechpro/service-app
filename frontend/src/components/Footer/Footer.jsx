import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter,Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#11E4C1] to-[#C0F5E6] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/">
            <span className="text-[#F717E1] text-[19px]">Bharat </span>
            <span className="text-[#142E38] text-[20px]">
              Automobile Service
            </span>
          </Link>
          <p className="text-[17px] leading-relaxed">
            Your one-stop solution for all automobile needs. We provide
            top-notch services to keep your vehicle running smoothly and
            efficiently.
          </p>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#1B2E35]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[17px]">
            <li>
              <Link to="/" className="hover:text-[#F717E1] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#F717E1] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-[#F717E1] transition-colors"
              >
                privacy
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-[#F717E1] transition-colors"
              >
                Service
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-[#1B2E35] ">
            Contact Us
          </h3>
          <ul className="space-y-2 text-[17px]">
            <li>
              Email:{" "}
              <a
                href="mailto:support@rktech.com"
                className="hover:text-[#F717E1] transition-colors"
              >
                support@rktech.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-[#F717E1] transition-colors"
              >
                +1 (234) 567-890
              </a>
            </li>
            <li>Address: 123 Design St, UI City, UX 45678</li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#1B2E35]">
            Follow Us
          </h3>
          <div className="flex space-x-4 cursor-pointer">
            <Facebook className="w-6 h-6 text-[#1B2E35] hover:text-[#F717E1] transition-colors" />
            <Twitter className="w-6 h-6 text-[#1B2E35] hover:text-[#F717E1] transition-colors" />
            <Instagram className="w-6 h-6 text-[#1B2E35] hover:text-[#F717E1] transition-colors" />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 border-t border-indigo-500 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Rktech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
