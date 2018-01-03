import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './assets/javascript/registerServiceWorker'
import store, { history } from './store'
import { Provider } from 'react-redux'
import 'core-js/es6/map'
import 'core-js/es6/set'
import 'typeface-roboto'
import './assets/font-awesome-4.7.0/css/font-awesome.core.css'
import { ConnectedRouter } from 'connected-react-router'
ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<AppContainer />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
