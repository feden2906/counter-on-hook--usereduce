const reducer = (state, action) => {

    const {result, inputValue} = state
    const {type, payload} = action

    switch (type) {

        case "MULTIPLY": {

            return (result + payload > 0)
                ? {...state, result: result + payload}
                : {...state, result: 0}
        }

        case "RESET": {
            return {result: 0}
        }

        case "SUBMIT_NUMBER": {

            if (isNaN(inputValue) || payload === '') {
                return {...state, showError: true}
            }

            return result + inputValue > 0
                ? {...state, result: result + inputValue, inputValue: ''}
                : {...state, result: 0, inputValue: ''}
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