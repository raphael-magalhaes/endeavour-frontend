import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

// Testing Prettier linting
const Input = props => {
  const { value, onClick, classes } = props;
  return (
    <div>
      <Typography gutterBottom noWrap>
        {value}
      </Typography>
      <Button
        onClick={() => {
          onClick('Redux Works: ' + new Date());
        }}
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </div>
  );
};

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Input);
