import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFFFFC] to-[#dfe1e0]">
      <h1 className="text-4xl font-bold text-[#142E38] mb-6">Contact Us</h1>
      <form action="">
        <div className="mb-4">
          <label className="block text-[#142E38] mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#142E38] mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#142E38] mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-[#F717E1] text-white font-semibold rounded hover:bg-[#D5006D]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
