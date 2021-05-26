import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, IconButton, Slide } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './header.styles';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
    const classes = useStyles();

    return ( 
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className={classes.root}>
                    <Toolbar>
                      <IconButton
                          edge="start"        
                          color="inherit"
                          aria-label="open drawer"
                      >
                        <MenuIcon/>
                      </IconButton>
                      <Typography variant="h6">MovieTime</Typography>
                      <Typography className={classes.loginText} variant="h6">Login</Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
 
export default Header;