import React from 'react';
import './InputWrapper.css'

export default function InputWrapper({onClickButton, state: {showError, inputValue}}) {

  return (
      <div className='input-wrapper'>
        <p><b>Число:</b></p>
        <input onInput={(e) => onClickButton("SET_VALUE_REACT_INPUT", parseInt(e.currentTarget.value))}
               className={showError ? 'input error' : 'input'}/>
        <button onClick={() => onClickButton("SUBMIT_NUMBER")} className='btn2'>Submit</button>
      </div>
  );
}