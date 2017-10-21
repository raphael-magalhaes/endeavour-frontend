import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './assets/javascript/registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import 'core-js/es6/map'
import 'core-js/es6/set'
import 'typeface-roboto'
import './assets/font-awesome-4.7.0/css/font-awesome.core.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppContainer />
		</Router>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
