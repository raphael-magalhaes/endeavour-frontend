import React from 'react'
import Paper from '../components/PaperSheet'
import Typography from 'material-ui/Typography'

const Technologies = props => {
  return (
    <Paper>
      <Typography type="display1" gutterBottom>
        Technologies
      </Typography>
      <Typography style={{ marginRight: "2em", }} type="body1">
        {"Technologies page."}
      </Typography>
    </Paper>
  )
}

export default Technologies