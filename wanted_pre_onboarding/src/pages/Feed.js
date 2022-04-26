import React from "react";
import "./Feed.css";

const Feed = (props) => {
  return (
    <section className="Feed">
      <div className="Feed__container">
        <div className="Feed__wrapper">
          <div className="Feed__detail">
            <p className="Feed__detailName">JSG JIwitter Feed</p>
          </div>
        </div>
      </div>
      <div className="Feed__content"></div>
    </section>
  );
};

export default Feed;
