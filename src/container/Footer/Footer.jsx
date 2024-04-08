import React from 'react';

import './Footer.css';
import {Newsletter} from "../../components"
import { images } from '../../constants';
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"

const Footer = () => (
  <div className="footer section__padding">
    <Newsletter />

    <div className="footer-links">
      <div className="footer-links-contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="p__opensans">address</p>
        <p className="p__opensans">phone number 1</p>
        <p className="p__opensans">phone number 2</p>
      </div>

      <div className="footer-links-logo">
        <img src={images.gericht} alt="logo" />
        <p className="opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="footer-links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer-links-work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: </p>
        <p className="p__opensans">10:00am - 02:00am </p>
        <p className="p__opensans">Sat - Sun:</p>
        <p className="p__opensans">10:00am - 01:00am</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p className="p__opensans">Gericht ©️ 2021</p>
    </div>
  </div>
);

export default Footer;
