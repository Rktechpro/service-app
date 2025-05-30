import React from "react";

const HowTowork = () => {
  const steps = [
    {
      number: "1",
      title: "Book Your Service",
      description: "Choose a convenient time and date for your bike service.",
    },
    {
      number: "2",
      title: "Drop Off Your Bike",
      description:
        "Bring your bike to our service center or schedule a pickup.",
    },
    {
      number: "3",
      title: "Expert Inspection",
      description: "Our mechanics will thoroughly inspect your bike.",
    },
    {
      number: "4",
      title: "Ride Away Happy",
      description: "Enjoy your bike with peace of mind after our service.",
    },
  ];
  return (
    <section className="relative  text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('./background.jpg')` }}
      ></div>
      <div className="relative z-10 py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="text-lg md:text-xl mb-12">
          We Offer Full Service Auto Repair & Maintenance
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-80 text-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-6xl font-bold text-white mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTowork;
