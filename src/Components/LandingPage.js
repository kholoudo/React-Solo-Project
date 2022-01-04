import React from "react";
import Slider from './slider';
import Intro from "./Intro";
import Data1 from "./Data1";
import Data2 from "./Data2";
import Cards from "./Cards";
import Testimonials from "./Testimonials";
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Intro/>
      <div className="landingpage-explore">
        <h3>OUR BESTSELLERS</h3>
        <div className="landingpage-bestSellers">
          {Data1.map((item, id) => (
            <Cards src={item.src} des={item.des} key={id} title={item.title} />
          ))}
        </div>
      </div>
      <div className="landingpage-about">
        <div className="landingpage-imageslider">
         
       
          <h3>Take a look at our bakeries </h3>
         <Slider/>
        </div>
      </div>
      <div className="landingpage-Testimonials">
        <h3>Our Testimonials</h3>
        <div className="landingpage-Testimonials-cards">
          {Data2.map((item, id) => (
            <Testimonials
              src={item.src}
              des={item.des}
              key={id}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
