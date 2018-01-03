import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { withStyles, withTheme } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import MenuIcon from 'material-ui-icons/Menu'
import { mainContent } from './drawerContent'
import logo from '../assets/images/react-redux-core.png'

import Tooltip from 'material-ui/Tooltip'
const drawerWidth = 240

const styles = theme => ({
	root: {
		width: '100%',
		height: '100vh',
		zIndex: 1,
		overflow: 'hidden'
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%'
	},
	appBar: {
		position: 'absolute',
		marginLeft: drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	drawerHeader: theme.mixins.toolbar,
	flex: {
		flex: 1
	},
	drawerPaper: {
		width: 250,
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			position: 'relative',
			height: '100vh'
		}
	},
	content: {
		backgroundColor: 'theme.palette.background.default',
		width: '100%',
		padding: theme.spacing.unit * 3,
		height: 'calc(100% - 100px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64
		}
	}
})

class ResponsiveAppBarDrawer extends React.Component {
	state = {
		mobileOpen: false
	}

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen })
	}

	render() {
		const { classes, title, children } = this.props
		const drawer = (
			<div>
				<div className={classes.drawerHeader} />
				<Link
					onClick={() => {
						if (
							this.state.mobileOpen ||
							this.props.isLeftDrawerOpen
						)
							this.props.onCloseLeftDrawer()
					}}
					className="no-link-style"
					to="/"
				>
					<img
						alt="React and Redux logo"
						className="gradient not-draggable"
						style={{
							width: '50px',
							height: '50px',
							position: 'relative',
							padding: '0.5em',
							margin: '-3em 0 0.5em 5.5em'
						}}
						src={logo}
					/>
				</Link>
				<Divider />
				<List
					onClick={() => {
						if (
							this.state.mobileOpen ||
							this.props.isLeftDrawerOpen
						)
							this.props.onCloseLeftDrawer()
					}}
				>
					{mainContent}
				</List>
				<Divider />
			</div>
		)
		return (
			<div>
				{this.props.location.pathname === '/404' ? (
					this.props.children
				) : (
					<div className={classes.root}>
						<div className={classes.appFrame}>
							<AppBar className={classes.appBar}>
								<Toolbar>
									<IconButton
										color="contrast"
										aria-label="open drawer"
										onClick={this.props.onOpenLeftDrawer}
										className={classes.navIconHide}
									>
										<MenuIcon />
									</IconButton>
									<Typography
										type="title"
										color="inherit"
										className={classes.flex}
										noWrap
									>
										<Link className="no-link-style" to="/">
											<span style={{ cursor: 'pointer' }}>
												{title}
											</span>
										</Link>
									</Typography>

									<a className="no-link-style">
										<Tooltip
											id="tooltip-dark-theme"
											title={
												this.props.theme.palette
													.type === 'light'
													? 'Dark theme'
													: 'Light theme'
											}
											placement="bottom"
										>
											<IconButton
												color="contrast"
												onClick={
													this.props.onToggleTheme
												}
											>
												<span
													className="fa fa-moon-o"
													aria-hidden="true"
												/>
											</IconButton>
										</Tooltip>
									</a>

									<a
										className="no-link-style"
										href="https://github.com/raphael-sdm/endeavour-frontend/"
									>
										<Tooltip
											id="tooltip-github-link"
											title="GitHub"
											placement="bottom"
										>
											<IconButton color="contrast">
												<span
													className="fa fa-github"
													aria-hidden="true"
												/>
											</IconButton>
										</Tooltip>
									</a>
								</Toolbar>
							</AppBar>
							<Hidden mdUp>
								<Drawer
									type="temporary"
									open={this.props.isLeftDrawerOpen}
									classes={{
										paper: classes.drawerPaper
									}}
									onRequestClose={() => {
										if (this.props.isLeftDrawerOpen)
											this.props.onCloseLeftDrawer()
									}}
									ModalProps={{
										keepMounted: true // Better open performance on mobile.
									}}
								>
									{drawer}
								</Drawer>
							</Hidden>
							<Hidden mdDown implementation="css">
								<Drawer
									type="permanent"
									open
									classes={{
										paper: classes.drawerPaper
									}}
								>
									{drawer}
								</Drawer>
							</Hidden>
							<main
								style={{
									display: 'flex',
									flexDirection: 'column',
									overflowY: 'auto'
								}}
								className={classes.content}
							>
								{children}
							</main>
						</div>
					</div>
				)}
			</div>
		)
	}
}

ResponsiveAppBarDrawer.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withRouter(
	withTheme()(withStyles(styles)(ResponsiveAppBarDrawer))
)
