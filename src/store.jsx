import { createStore } from 'redux'
import reducers from './reducers/reducers'
import InitialStoreState from './constants/InitialStoreState'

export default createStore(
    reducers,
    InitialStoreState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)