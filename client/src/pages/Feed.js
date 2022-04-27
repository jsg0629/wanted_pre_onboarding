import "./Feed.css";
import dummyTweets from "../static/dummyData";
import Tweet from "../component/Tweet";
import Dropdown from "../component/Dropdown";
import React, { useState } from "react";
import Toggle from "../component/Toggle";

const Feed = () => {
  const [filteredTweets, filteringTweets] = useState(dummyTweets);
  const [isDarkmode, setDarkmode] = useState(false);



  return (
    <>
      <div className="Feed__container">
        <div className="Feed__wrapper">
          <div className="Feed__detail">
            <p className="Feed__detailName">JIwitter Feed</p>
          </div>
          <div className="Feed__count" role="status">
            <span className="Feed__count__text">
              {`total: ${filteredTweets.length}`}
            </span>
          </div>
        </div>
      </div>
      <Dropdown
        tweets={dummyTweets}
        filteringTweets={filteringTweets}
      />
      <Toggle isDarkmode={isDarkmode} setDarkmode={setDarkmode}/>
      <ul className={isDarkmode ? "Feed__contents darkmode" : "Feed__contents"}>
        {filteredTweets.map((el) => {
          return <Tweet key={el.id} tweet={el} />;
        })}
      </ul>
    </>
  );
};

export default Feed;
