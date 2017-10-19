import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App'

const mapStateToProps = state => {
	return {
		themeType: state.themeType
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

const AppContainer = withRouter(
	connect(mapStateToProps, mapDispatchToProps)(App)
)

export default AppContainer
