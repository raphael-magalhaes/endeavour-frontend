import { combineReducers } from 'redux'
import InputReducer from './InputReducer'

const Reducers = combineReducers({
    value: InputReducer
})

export default Reducers