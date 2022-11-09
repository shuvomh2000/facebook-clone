import React from "react";
import { FaNewspaper, FaUserFriends } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { MdVideoLibrary, MdGroups } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useSelector } from "react-redux";
import "./sidenavbar.css";

const Sidenavbar = () => {


  let user = useSelector((state) => state.user.userInfo);
  return (
    <div className="Sidenavbar">
      <div className="profileContainer">
        <picture>
          <img
            className="coverPic"
            src="images/coverSidebar.png"
            loading="lazy"
          />
          <img
            className="profilePic"
            src="images/profileimg.png"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="nameContainer">
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>www.{user.username}.com</p>
      </div>
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
      <div className="sideMenu">
        <ul>
          <li>
            <FaNewspaper className="icon" />
            <h3>newsfeed</h3>
          </li>
          <li>
            <MdVideoLibrary className="icon" />
            <h3>videos</h3>
          </li>
          <li>
            <MdGroups className="icon" />
            <h3>groups</h3>
          </li>
          <li>
            <HiOutlinePhotograph className="icon" />
            <h3>photos</h3>
          </li>
          <li>
            <FaUserFriends className="icon" />
            <h3>friends</h3>
          </li>
          <li>
            <AiOutlineUserAdd className="icon" />
            <h3>Friends Request</h3>
          </li>
          <li>
            <IoIosLogOut className="icon" />
            <h3>Logout</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenavbar;
