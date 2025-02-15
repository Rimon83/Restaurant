import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () =>{ 
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = useState(false)

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo){
      vidRef.current.pause();
    } else{
     vidRef.current.play();
    }
  }
return (
  <div className="video">
    <video
      src={meal}
      ref={vidRef}
      type="video/mp4"
      Loop
      controls={false}
      muted
    ></video>

    <div className="video-overlay flex__center">
      <div className="video-overlay-circle flex__center" onClick={handleVideo}>
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={30} />
        ) : (
          <BsFillPlayFill color="#fff" fontSize={30} />
        )}
      </div>
    </div>
  </div>
);
}

export default Intro;
