import React from "react";

import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04];
const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef
    if (direction === "left"){
      current.scrollLeft -= 300;
    } else{
       current.scrollLeft += 300;

    }
  }
  return (
    <div className="gallery flex__center">
      <div className="gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <button type="button" className="custom__button">view More</button>
      </div>

      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index)=>(
            <div className="gallery-images-card flex__center" key={`gallery_image-${index+ 1}`}>
              <img src={image} alt="gallery"/>
              <BsInstagram className="gallery-image-icon"/>

            </div>

          ))}

        </div>

        <div className="gallery-images-arrow">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll("left")}/>
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll("right")}/>

        </div>

      </div>
    </div>
  );
};

export default Gallery;
