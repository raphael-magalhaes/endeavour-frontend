import React from 'react';
import Paper from '../components/PaperSheet'
import Typography from 'material-ui/Typography'

const Contribute = props => {
  return (
    <div>
      <Paper>
        <Typography type="display1" gutterBottom>
          Contribute {props.match.params.id}
        </Typography>
        <Typography style={{ marginRight: "2em", }} type="body1">
          {"Contribute page."}
        </Typography>
      </Paper>
    </div>
  )
}

export default Contribute