import React from 'react'
import Paper from '../components/PaperSheet'
import Typography from 'material-ui/Typography'

const About = props => {
	return (
		<Paper>
			<Typography type="display1" gutterBottom>
				About
			</Typography>
			<Typography style={{ marginRight: '2em' }} type="body1">
				{'About page.'}
			</Typography>
		</Paper>
	)
}

export default About
