import { createStore } from 'redux'
import reducers from './reducers/reducers'
import InitialStoreState from './constants/InitialStoreState'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
export const history = createBrowserHistory()

export default createStore(
	connectRouter(history)(reducers),
	InitialStoreState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
