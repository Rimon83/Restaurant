import React from 'react';

import './AboutUs.css';
import {images} from "../../constants"

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="aboutus-content flex__center">
      <div className="aboutus-content-about">
        <h1 className="headtext__cormorant ">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi 
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
      <div className="aboutus-content-knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. 
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
