import ActionTypes from '../../constants/ActionTypes'
import { onToggleTheme } from '../ThemeActions'

describe('ThemeActions', () => {
    it('onToggleTheme properly create an action', () => {
      const expectedAction = {
        type: ActionTypes.Theme.TOGGLE_THEME,
      }
      expect(onToggleTheme()).toEqual(expectedAction)
    })
  })