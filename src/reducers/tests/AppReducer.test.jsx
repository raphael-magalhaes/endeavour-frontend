import reducer from '../appReducer'
import { onToggleTheme } from '../../actions/ThemeActions'
import InitialStoreState from '../../constants/InitialStoreState'

describe('appReducer', () => {
    it('should render the initial state', () => {
        expect(reducer(undefined, {})).toEqual(InitialStoreState.themeType)
    })
    it('should toggle the theme from light to dark', () => {
        expect(reducer("light", onToggleTheme())).toEqual('dark')
    })
    it('should toggle the theme from dark to light', () => {
        expect(reducer("dark", onToggleTheme())).toEqual('light')
    })
    it('should be able to toggle the theme back and forth many times', () => {
        let result = null
        expect(result = reducer("light", onToggleTheme())).toEqual("dark")
        expect(result = reducer(result, onToggleTheme())).toEqual("light")
        expect(result = reducer(result, onToggleTheme())).toEqual("dark")
        expect(result = reducer(result, onToggleTheme())).toEqual("light")
        expect(result = reducer(result, onToggleTheme())).toEqual("dark")
    })
})