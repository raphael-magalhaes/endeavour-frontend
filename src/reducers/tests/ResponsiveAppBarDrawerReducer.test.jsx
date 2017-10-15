import reducer from '../responsiveAppBarDrawerReducer'
import { onOpenLeftDrawer, onCloseLeftDrawer } from '../../actions/ResponsiveDrawerActions'
import InitialStoreState from '../../constants/InitialStoreState'

describe('responsiveAppBarDrawerReducer', () => {
    it('should render the initial state', () => {
        expect(reducer(undefined, {})).toEqual(InitialStoreState.isLeftDrawerOpen)
    })
    it('should toggle the state to true', () => {
        expect(reducer(false, onOpenLeftDrawer())).toEqual(true)
    })
    it('should not change the state to false', () => {
        expect(reducer(true, onOpenLeftDrawer())).toEqual(true)
    })
    it('should toggle the state to false', () => {
        expect(reducer(true, onCloseLeftDrawer())).toEqual(false)
    })
    it('should not change the state to false', () => {
        expect(reducer(false, onCloseLeftDrawer())).toEqual(false)
    })
    it('should be able to toggle the state back and forth many times', () => {
        let result = null
        expect(result = reducer(false, onOpenLeftDrawer())).toEqual(true)
        expect(result = reducer(result, onCloseLeftDrawer())).toEqual(false)
        expect(result = reducer(result, onOpenLeftDrawer())).toEqual(true)
        expect(result = reducer(result, onCloseLeftDrawer())).toEqual(false)
        expect(result = reducer(result, onOpenLeftDrawer())).toEqual(true)
    })
})