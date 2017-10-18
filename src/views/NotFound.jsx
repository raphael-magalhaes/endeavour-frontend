import React from 'react';
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography';
import logo from '../assets/images/react-redux-core.png'

const NotFound = props => {
  return (
    <div style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: "100px",
    }}>
      <Typography type="display4" gutterBottom>
        404
    </Typography>
      <Typography type="body1">
        {"Page not found."}
      </Typography>
      <br />
      <Link className="no-link-style" to="/">
        <img
          alt="React and Redux logo"
          width="200"
          height="200"
          className="gradient not-draggable"
          style={{
            padding: "0.3em",
            width: "20px"
          }}
          src={logo} />
      </Link>
      <br />
      <Link className="no-link-style" to="/">
        <Typography type="caption" gutterBottom align="center">
          Go back to the home page.
      </Typography>
      </Link>
    </div>
  )
}

export default NotFound