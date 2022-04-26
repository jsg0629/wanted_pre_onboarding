import React from 'react';
import { Link  } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="tap">
      <Link to={'/'}><i className="far fa-question-circle">Feed</i></Link>
      <Link to={'/message'}><i className="far fa-comment-dots">Message</i></Link>
      <Link to={'/mypage'}><i className="far fa-user">Mypage</i></Link>
    </section>
  );
};

export default Sidebar;
