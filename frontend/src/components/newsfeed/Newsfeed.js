import React from "react";
import "./newsfeed.css";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";


const Newsfeed = () => {
    let user = useSelector((state) => state.user.userInfo);
  return (
    <div className="newsfeed">
      <div className="newsprofileContainer">
        <picture>
          <img
            className="newscoverPic"
            src="images/newsfeedcover.png"
            loading="lazy"
          />
          <img
            className="newsprofilePic"
            src="images/newsfeedprofile.png"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="nameholder">
        <div className="counting">
          <ul>
            <li>
              <h5>930</h5>
              <p>Friends</p>
            </li>
            <li>
              <h5>87</h5>
              <p>following</p>
            </li>
            <li>
              <h5>1k</h5>
              <p>followers</p>
            </li>
          </ul>
        </div>
        <div className="nameText">
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>www.{user.username}.com</p>
        </div>
        <div className="icons">
          <div className="icon" style={{background:'#3763D2'}}>
            <AiFillFacebook />
          </div>
          <div className="icon" style={{background:'#F8468D'}}>
            <FaInstagram />
          </div>
          <div className="icon" style={{background:'#1ABCFF'}}>
            <BsTwitter />
          </div>
          <div className="icon" style={{background:'#FD434F'}}>
            <AiFillYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
