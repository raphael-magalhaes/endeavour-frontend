import ActionTypes from '../constants/ActionTypes'

export const onToggleTheme = () => {
	return {
		type: ActionTypes.Theme.TOGGLE_THEME
	}
}
