import React from "react";
import Whychoses from "../whychose/Whychoses";
import HowTowork from "../HowTowork/HowTowork";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Whychoses />
      <div>
        <HowTowork />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
