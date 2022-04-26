import React from 'react';
import { Link  } from 'react-router-dom';
import { useState } from "react";
import './Tap.css';


const Sidebar = () => {
  const [ viewPoint, setViewPoint ] = useState(0); 
  return (
    <section className="tap">
      <Link to={'/'} onClick={() => { setViewPoint(0); }} className={ viewPoint === 0 ? "tap__item tap__selleted__tit" : "tap__item tap__tit" }>Feed</Link>
      <Link to={'/message'} onClick={() => { setViewPoint(1); }} className={ viewPoint === 1 ? "tap__item tap__selleted__tit" : "tap__item tap__tit" }>Message</Link>
      <Link to={'/mypage'} onClick={() => { setViewPoint(2); }} className={ viewPoint === 2 ? "tap__item tap__selleted__tit" : "tap__item tap__tit" }>MyPage</Link>
      <div class="active__tab__marker"></div>
    </section>
  );
};

export default Sidebar;
