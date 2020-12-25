import React from 'react';
import './BtnWrapper.css'

export default function BtnWrapper({onClickButton}) {
  return (
      <div className='btn-wrapper'>
        <button onClick={() => onClickButton("PLUS_ONE",1)} className='btn'>+ 1</button>
        <button onClick={() => onClickButton("PLUS_ONE", 100)} className='btn'>+ 100</button>
        <button onClick={() => onClickButton("MINUS_ONE")} className='btn'>- 1</button>
        <button onClick={() => onClickButton("MINUS_HUNDRED")} className='btn'>- 100</button>
        <button onClick={() => onClickButton("RESET")} className='btn'>Reset</button>
      </div>
  );
}
