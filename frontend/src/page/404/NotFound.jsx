import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-700 to-purple-600 flex items-center justify-center text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-bold mb-6 animate-fade-in">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-md mx-auto">
          Oops! It looks like the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
