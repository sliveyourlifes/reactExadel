import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
};

const Footer = (props) => {
  const { classes } = props;
    return(
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Posted by: Alex Kurylionak
            </Typography>
            <Typography variant="title" color="inherit">
                Contact information:<a href="mailto:akurylionak@exadel.com">akurylionak@exadel.com</a>.
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Footer);
