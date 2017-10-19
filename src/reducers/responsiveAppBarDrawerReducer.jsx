import ActionTypes from '../constants/ActionTypes'
import InitialStoreState from '../constants/InitialStoreState'

const responsiveAppBarDrawerReducer = (
	state = InitialStoreState.isLeftDrawerOpen,
	action
) => {
	switch (action.type) {
		case ActionTypes.ResponsiveAppBarDrawer.ON_OPEN_LEFT_DRAWER: {
			return true
		}
		case ActionTypes.ResponsiveAppBarDrawer.ON_CLOSE_LEFT_DRAWER: {
			return false
		}
		default: {
			return state
		}
	}
}

export default responsiveAppBarDrawerReducer
