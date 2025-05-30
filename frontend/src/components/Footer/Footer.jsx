import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#11E4C1] to-[#C0F5E6] text-[#1B2E35] w-full mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-12">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#F717E1]">Bharat </span>
            <span className="text-[#142E38]">Automobile Service</span>
          </Link>
          <p className="mt-4 text-base leading-relaxed">
            Your one-stop solution for all automobile needs. We provide
            top-notch services to keep your vehicle running smoothly and
            efficiently.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {["Home", "About", "Privacy", "Service"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#F717E1] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-base">
            <li>
              <span>Email: </span>
              <a
                href="mailto:support@rktech.com"
                className="hover:text-[#F717E1] transition-colors"
              >
                support@rktech.com
              </a>
            </li>
            <li>
              <span>Phone: </span>
              <Link
                href="tel:+1234567890"
                className="hover:text-[#F717E1] transition-colors"
              >
                +1 (234) 567-890
              </Link>
            </li>
            <li>
              <span>Address: </span>123 Design St, UI City, UX 45678
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              aria-label="Facebook"
              className="text-[#1B2E35] hover:text-[#F717E1] transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-[#1B2E35] hover:text-[#F717E1] transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-[#1B2E35] hover:text-[#F717E1] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1B2E35]/30 py-4 text-center text-sm text-[#1B2E35]">
        &copy; {new Date().getFullYear()} RKTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
