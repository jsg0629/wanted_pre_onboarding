import React from 'react';
import './Toggle.css';


const Toggle = ({isDarkmode, setDarkmode}) => {
    const handleToggle = () => {
        if(isDarkmode){
            setDarkmode(false);
        } else {
            setDarkmode(true)
        }
      };

    return(
        <span id="toggle">
            <input className="toggle__btn" type="checkbox" defaultChecked={isDarkmode} onClick={() => {handleToggle();}}></input>
            <label className="toggle__label"></label>
        </span>
    )
}

export default Toggle 
