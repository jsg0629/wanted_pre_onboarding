import React from "react";
import './Loginform.css'
import { useState } from "react";

const Loginform = () => {
  const [isEmailCheck, checkEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword ] = useState('');
  const [email, setEmail ] = useState('');

  const check_spc = /[~!#$%^&*()_+|<>?:{}]/; // 특수문자  정규식
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크 정규식
  const blank_pattern = /^\s+|\s+$/; // 공백 정규식
  const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 형식 검사
  
  const togglePass = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const validateEmail = (email) => {
    if (blank_pattern.test(email)) {
      // 공백검사
      return checkEmail(false);
    }
    if (check_kor.test(email)) {
      // 한글체크 검사
      return checkEmail(false);
    }
    if (check_spc.test(email)) {
      // 특수문자 검사
      return checkEmail(false);
    }
    if(!pattern.test(email)) {
      // 이메일 형식 검사
      return checkEmail(false);
    }
    if (email.length < 10){
      // 이메일 길이 검사
      return checkEmail(false);
    }
    return checkEmail(true);
  }

  return (
    <div>
      <form action="" method="POST">
        <div className="input-box">
          <input
            className="input__email"
            value={email}
            type="text"
            name="username"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(email);
            }}
          />
          <label htmlFor="username">email</label>
          {isEmailCheck ?  <i className="fa-solid fa-circle-check"></i> : <i className="fa-solid fa-circle-exclamation" onClick={() => {
               if (blank_pattern.test(email)) {
                // 공백검사
                setEmail('');
                return alert("공백은 입력할 수 없습니다.");
              }
              if (check_kor.test(email)) {
                // 한글체크 검사
                setEmail('');
                return alert("영문만 입력 가능합니다.");
              }
              if (check_spc.test(email)) {
                // 특수문자 검사
                setEmail('');
                return alert("특수문자는 입력할 수 없습니다.");
              }
              if(!pattern.test(email)) {
                // 이메일 형식 검사
                setEmail('');
                return alert("이메일 형식이 올바르지 않습니다.");
              }
              if (email.length < 10){
                // 이메일 길이 검사
                setEmail('');
                return alert("이메일이 너무 짧습니다.");
              }
          }}></i>}
        </div>
        <div className="input-box">
          <input
            className="input__password"
            value={password}
            type={ showPassword ? 'text' : 'password'}
            name="password"
            placeholder="password"
            onChange={(e) => {setPassword(e.target.value);}}
          />
          <label htmlFor="password">password</label>
          {showPassword ? <i className="fa-solid fa-eye" onClick={togglePass}></i> : <i className="fa-solid fa-eye-slash" onClick={togglePass}></i>}
        </div>
        <input className="loginform__loginButton" type="button" value="로그인" />
        <div className="loginform__signUpButton" value="Create new account?">Create new account?</div>
      </form>
    </div>
  );
};

export default Loginform;
