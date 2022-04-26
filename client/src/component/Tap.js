import React from 'react';
import { Link  } from 'react-router-dom';
import { useState } from "react";
import Modal from './Modal/Modal';
import './Tap.css';


const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [ viewPoint, setViewPoint ] = useState(0); 
 const handleModal = (state) => setOpenModal(state);
  return (
    <section className="tap">
      <Link to={'/'} onClick={() => { setViewPoint(0); handleModal(false);}} className={ viewPoint === 0 ? "tap__item tap__selleted__tit" : "tap__item tap__tit" }>Feed</Link>
      <Link to={'/message'} onClick={() => { setViewPoint(1); handleModal(true);}} className={ viewPoint === 1 ? "tap__item tap__selleted__tit" : "tap__item tap__tit" }>Message</Link>
      <Link to={'/mypage'} onClick={() => { setViewPoint(2); handleModal(true);}} className={ viewPoint === 2 ? "tap__item tap__selleted__tit" : "tap__item tap__tit" }>MyPage</Link>
      <div className="active__tab__marker"></div>
      <Modal openModal={openModal} handleModal={handleModal} />
    </section>
  );
};

export default Sidebar;
