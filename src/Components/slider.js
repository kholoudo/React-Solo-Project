import SimpleImageSlider from "react-simple-image-slider";
import React from 'react';
import '../styles/Slider.css';

function Slider (){
    const images = [
        { url: "image9.jpeg" },
        { url: "image2.jpg" },
        { url: "image3.jpg" },
        { url: "image8.jpeg" },
        { url: "image5.jpeg" },
        { url: "image6.jpeg" },
       
      ];

    return(
<div className="sliderSec">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        
      />
    </div>


    )


}export default Slider
