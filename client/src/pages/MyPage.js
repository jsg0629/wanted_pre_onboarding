import React from "react";
import "./MyPage.css";

const MyPage = () => {
  return (
    <>
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">Guest Profile</div>
        </div>
      </div>
      <div className="myInfo__detail"></div>
    </>
  );
};

export default MyPage;
