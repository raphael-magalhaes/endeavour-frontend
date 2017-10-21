import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'

const styles = theme => ({
	root: theme.mixins.gutters({
		paddingTop: 16,
		paddingBottom: 16,
		marginTop: theme.spacing.unit * 3
	})
})

function PaperSheet(props) {
	const { classes } = props
	return (
		<div>
			<Paper className={classes.root} elevation={props.elevation}>
				{props.children}
			</Paper>
		</div>
	)
}

PaperSheet.defaultProps = {
	elevation: 2
}

PaperSheet.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
