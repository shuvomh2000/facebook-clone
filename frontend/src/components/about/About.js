import React from "react";
import './about.css'

const About = () => {
  return (
    <div className="about">
      <div className="heading">
        <h4>about me</h4>
        <h4>...</h4>
      </div>
      <p>
        Hi! My name is A B M Shawon Islam but some people may know me as
        GameHuntress! I have a Twitch channel where I stream, play and review
        all the newest games.
      </p>
      <ul>
        <li>
          <span>Joined:</span>22 November 2008
        </li>
        <li>
          <span>city:</span>dhaka
        </li>
        <li>
          <span>age:</span>18 years
        </li>
      </ul>
    </div>
  );
};

export default About;
