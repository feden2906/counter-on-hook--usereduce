const reducer = (state, action) => {
  const {result, inputValue} = state
  const {type, payload} = action
  switch (type) {
    case "MULTIPLY": {
      if (result + payload > 0) {
        return {...state, result: result + payload}
      }else {
        return {...state, result: 0}
      }
    }
    case "RESET": {
      return {result: 0}
    }
    case "SUBMIT_NUMBER": {
      if (isNaN(inputValue) || payload === '') {
        return {...state, showError: true}
      }
      if(result + inputValue > 0) {
        return {...state, result: result + inputValue, inputValue: ''}
      }else {
        return {...state, result: 0, inputValue: ''}
      }
    }
    case "SET_VALUE_REACT_INPUT": {
      return {...state, inputValue: payload, showError: false}
    }
    default: {
      console.log(`ERROR! Action ${type} not found.`)
      return state
    }
  }
}

export default reducer