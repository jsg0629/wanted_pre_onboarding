import React from "react";
import './Message.css';

const Message = () => {
  return(
    <section className="Message">
      <div className="Message__container">
        <div className="Message__wrapper">
          <div className="Message__profile">
          Guest Message
          </div>
        </div>
      </div>
      <div className="Message__content"></div>
    </section>
  )
};

export default Message;
