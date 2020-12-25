import React, {useReducer} from 'react';
import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";
import InputWrapper from "./inputWrapper/InputWrapper";

const reducer = (state, action) => {
  const {result, inputValue} = state
  const {type, payload} = action
  switch (type) {
    case "PLUS_ONE": {
      console.log(payload);
      return {
        ...state,
        result: result + payload
      }
    }
    case "PLUS_HUNDRED": {
      return {result: result + 100}
    }
    case "MINUS_ONE": {
      if (result - 1 < 0) {
        return {result: 0}
      } else {
        return {result: result - 1}
      }
    }
    case "MINUS_HUNDRED": {
      if (result - 100 < 0) {
        return {result: 0}
      } else {
        return {result: result - 100}
      }
    }
    case "RESET": {
      return {result: 0}
    }
    case "SUBMIT_NUMBER": {
      if (isNaN(inputValue) || action.payload === '') {
        return {...state, showError: true}
      }
      return {...state, result: result + inputValue, inputValue: ''}
    }
    case "SET_VALUE_REACT_INPUT": {
        return {...state, inputValue: action.payload, showError: false}
      }
    default: {
      console.log(`ERROR! Action ${action.type} not found.`)
      return state
    }
  }
}

const initialState = {result: 0, showError: false, inputValue: ''}

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
