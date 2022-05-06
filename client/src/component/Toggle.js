import React from 'react'
import './Toggle.css'


function Toggle({isDarkmode, setDarkmode}) {
    const handleToggle = () => {
        if(isDarkmode){
            setDarkmode(false)
        } else {
            setDarkmode(true)
        }
      }

    return(
      <span id="toggle">
        <input className="toggle__btn" type="checkbox" defaultChecked={isDarkmode} onClick={() => {handleToggle()}} />
        <label className="toggle__label" />
      </span>
    )
}

export default Toggle 
