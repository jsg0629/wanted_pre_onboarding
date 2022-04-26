import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <>
      <div className="Message__container">
        <div className="Message__wrapper">
          <div className="Message__profile">Guest Message</div>
        </div>
      </div>
      <div className="Message__content"></div>
    </>
  );
};

export default Message;
