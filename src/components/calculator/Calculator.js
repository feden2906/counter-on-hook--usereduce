import React, {useReducer} from 'react';
import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";
import InputWrapper from "./inputWrapper/InputWrapper";
import initialState from '../../store/initialState';
import reducer from '../../reducer/reducer';

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const startDispatch = (type, payload) => {
    dispatch({type, payload})
  }

  return (
      <div className='calc-wrapper'>
        <Title/>
        <Result result={state.result}/>
        <BtnWrapper onClickButton={startDispatch}/>
        <InputWrapper onClickButton={startDispatch} state={state}/>
        {state.showError && <p><b className="text-error">Потрібно вказати число</b></p>}
      </div>
  );
}