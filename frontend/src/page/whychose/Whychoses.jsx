import React from "react";
import { ShieldCheck, Clock, Wrench, Star } from "lucide-react";
import bmw from "../../assets/image/bmw.png";

const Whychoses = () => {
  const features = [
    {
      title: "Reliable Service",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      description:
        "We offer trustworthy and consistent bike servicing you can count on.",
    },
    {
      title: "Quick Turnaround",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      description: "Get your bike serviced faster with our efficient team.",
    },
    {
      title: "Expert Mechanics",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      description: "Our certified mechanics ensure your bike is in safe hands.",
    },
    {
      title: "Top-Rated Support",
      icon: <Star className="w-8 h-8 text-blue-600" />,
      description:
        "Rated 4.9/5 by customers for excellent service and support.",
    },
  ];
  return (
    <section className="bg-[#000000] py-4 px-2 md:px-8 lg:px-16">
      <div className="text-center mb-12 pt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-100 max-w-xl mx-auto">
          Discover what makes our bike service platform the best choice for
          maintaining your ride.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        <img src={bmw} alt="KTM Bike" className="w-full" />

        {/* Example Hotspot */}
        <div className="absolute top-[40%] left-[20%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[45%] left-[35%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[50%] left-[50%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[55%] left-[65%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[60%] left-[80%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[70%] left-[90%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[80%] left-[10%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[90%] left-[30%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[20%] left-[70%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
        <div className="absolute top-[30%] left-[50%] w-5 h-5 bg-red-600 border-2 border-white rounded-full"></div>
      </div>
      <div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4 text-center">
            Our Commitment to Excellence
          </h2>
          <p className="text-gray-100 max-w-xl mx-auto text-center">
            We are dedicated to providing top-notch service and support for all
            your bike maintenance needs.
          </p>
        </div> 
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychoses;
