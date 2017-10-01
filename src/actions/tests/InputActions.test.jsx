import { onChangeInput } from '../InputActions'

describe('InputActions.onChangeInput', () => {
    it('should create an action to change the input', () => {
      const payload = 'An input'
      const expectedAction = {
        type: 'ON_CHANGE_INPUT',
        payload
      }
      expect(onChangeInput(payload)).toEqual(expectedAction)
    })
  })