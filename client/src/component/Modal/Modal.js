import React from 'react';
import Loginform from './Loginform';
import './Modal.css';

const Modal = ({ openModal, handleModal }) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴    open, close, header 
    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={openModal ? 'openModal modal' : 'modal'}>
        {openModal ? (
          <section>
            <header>
              Login
              <button className="close" onClick={(e)=>{handleModal(false)}}>
                &times;
              </button>
            </header>
            <main>
              <Loginform/>
            </main>
            <footer>
              <button className="close" onClick={()=>{handleModal(false)}}>
                close
              </button> 
            </footer>
          </section>
        ) : null}
      </div>
    );
  };

  export default Modal;
