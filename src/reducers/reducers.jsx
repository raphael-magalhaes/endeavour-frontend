import { combineReducers } from 'redux'
import appReducer from './appReducer'
import responsiveAppBarDrawerReducer from './responsiveAppBarDrawerReducer'

const reducers = combineReducers({
    themeType: appReducer,
    isLeftDrawerOpen: responsiveAppBarDrawerReducer
})

export default reducers