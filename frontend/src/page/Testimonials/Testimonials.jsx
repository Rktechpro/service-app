import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "Car Owner",
    quote:
      "Bharat Automobile Service is exceptional! The service is fast, affordable, and very professional. Highly recommended.",
    image: "./m1.jpg",
  },
  {
    name: "Priya Sharma",
    position: "Bike Enthusiast",
    quote:
      "Amazing experience! My bike feels brand new. The staff is courteous and knowledgeable.",
    image: "/m2.jpg",
  },
  {
    name: "Ravi Kumar",
    position: "Web Developer",
    quote:
      "They handle our entire vehicle fleet with care and efficiency. Reliable and cost-effective solutions every time.",
    image: "/m3.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#f9fafa] py-16 px-6 text-center my-10">
      <h2 className="text-3xl font-bold text-[#1d84a9] mb-10">
        What Our Customers Say
      </h2>
      <div className="max-w-3xl mx-auto relative bg-white p-8 rounded-xl shadow-lg transition-all duration-700 ease-in-out">
        {/* Image */}
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-24 h-24 rounded-full mx-auto object-cover mb-4 shadow-md"
        />
        {/* Quote */}
        <p className="text-lg text-gray-700 italic mb-6">
          "{testimonials[current].quote}"
        </p>
        {/* Name and Position */}
        <h4 className="text-xl font-semibold text-[#142E38]">
          {testimonials[current].name}
        </h4>
        <p className="text-sm text-gray-500">
          {testimonials[current].position}
        </p>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevTestimonial}
            className="bg-[#11E4C1] text-white p-2 rounded-full hover:bg-[#0cc2a4] transition"
            aria-label="Previous"
          ></button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextTestimonial}
            className="bg-[#11E4C1] text-white p-2 rounded-full hover:bg-[#0cc2a4] transition"
            aria-label="Next"
          ></button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
