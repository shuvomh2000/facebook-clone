import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postHolder">
          <div className="postProfile">
            <div className="imgContain">
              <picture>
                <img className="img" src="images/profileimg.png" />
              </picture>
            </div>
            <div className="postProfileText">
              <h4>A B M Shawon Islam</h4>
              <p>29 minutes ago</p>
            </div>
          </div>
          <div>
            <h5 style={{ fontSize: "30px", color: "#000" }}>...</h5>
          </div>
        </div>
        <p className="status">
          I have great news to share with you all! I’ve been officially made a
          game streaming verified partner by Streamy http://lyt.ly/snej25. What
          does this mean? I’ll be uploading new content every day, improving the
          quality and I’m gonna have access to games a month before the official
          release. This is a dream come true, thanks to all for the support!!!
        </p>
      </div>
    </div>
  );
};

export default Post;
