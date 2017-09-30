const InputReducer = (state = "", action) => {
    switch (action.type) {
        case 'ON_CHANGE_INPUT': {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default InputReducer