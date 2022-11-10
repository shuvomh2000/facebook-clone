import React from "react";
import "./videos.css";
import { BsFillPlayFill } from "react-icons/bs";

const Videos = () => {
  return (
    <div className="videos">
      <div className="heading">
        <h5>
          videos <span>7</span>
        </h5>
        <h5>...</h5>
      </div>
      <div className="videoContain">
        <img src="images/profilevideoside.png" />
        <div className="playBtn">
          <BsFillPlayFill className="icon" />
        </div>
      </div>
      <div className="videoContain">
        <img src="images/profilevideoside.png" />
        <div className="playBtn">
          <BsFillPlayFill className="icon" />
        </div>
      </div>
      <div className="videoContain">
        <img src="images/profilevideoside.png" />
        <div className="playBtn">
          <BsFillPlayFill className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Videos;
