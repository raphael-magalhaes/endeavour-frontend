import ActionTypes from '../../constants/ActionTypes'
import { onOpenLeftDrawer, onCloseLeftDrawer } from '../ResponsiveDrawerActions'

describe('ResponsiveDrawerActions', () => {
	it('onOpenLeftDrawer properly create an action', () => {
		const expectedAction = {
			type: ActionTypes.ResponsiveAppBarDrawer.ON_OPEN_LEFT_DRAWER
		}
		expect(onOpenLeftDrawer()).toEqual(expectedAction)
	})

	it('onCloseLeftDrawer properly create an action', () => {
		const expectedAction = {
			type: ActionTypes.ResponsiveAppBarDrawer.ON_CLOSE_LEFT_DRAWER
		}
		expect(onCloseLeftDrawer()).toEqual(expectedAction)
	})
})
