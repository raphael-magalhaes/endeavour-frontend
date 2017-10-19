import ActionTypes from '../constants/ActionTypes'
import InitialStoreState from '../constants/InitialStoreState'

const appReducer = (state = InitialStoreState.themeType, action) => {
	switch (action.type) {
		case ActionTypes.Theme.TOGGLE_THEME: {
			return state === 'light' ? 'dark' : 'light'
		}
		default: {
			return state
		}
	}
}

export default appReducer
