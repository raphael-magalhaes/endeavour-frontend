import reducer from '../InputReducer'

describe('InputReducer', () => {
    it('should render the initial state', () => {
        expect(reducer(undefined, {})).toEqual("")
    })
    it('should render the new state', () => {
        expect(reducer("", {type: 'ON_CHANGE_INPUT', payload: 'New value'})).toEqual('New value')
    })
})