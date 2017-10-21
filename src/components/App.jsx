import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { MuiThemeProvider, withTheme } from 'material-ui/styles'
import LightTheme from '../themes/LightTheme'
import DarkTheme from '../themes/DarkTheme'
import '../assets/css/App.css'
import ResponsiveAppBarDrawerContainer from '../containers/ResponsiveAppBarDrawerContainer'
import Home from '../views/Home'
import Technologies from '../views/Technologies'
import Contribute from '../views/Contribute'
import About from '../views/About'
import NotFound from '../views/NotFound'

const APP_BAR_TITLE = 'The Endeavour'

class App extends Component {
	render() {
		return (
			<MuiThemeProvider
				theme={
					this.props.themeType === 'light' ? LightTheme : DarkTheme
				}
			>
				<div
					style={{
						height: '100vh',
						overflow: 'auto',
						backgroundColor:
							this.props.themeType === 'light'
								? LightTheme.palette.background.default
								: DarkTheme.palette.background.default
					}}
				>
					<ResponsiveAppBarDrawerContainer title={APP_BAR_TITLE}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/technologies"
								component={Technologies}
							/>
							<Route
								exact
								path="/contribute/:id?"
								component={Contribute}
							/>
							<Route exact path="/about" component={About} />
							<Route exact path="/404" component={NotFound} />
							<Redirect to={'/404'} />
						</Switch>
					</ResponsiveAppBarDrawerContainer>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default withTheme()(App)
