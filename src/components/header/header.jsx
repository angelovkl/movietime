import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './header.styles';

const Header = (props) => {
    const classes = useStyles();
    console.log(props, ' props in header')

    const handleDrawerOpen = () => {
      props.handleDrawerOpen(true);
    };

    return ( 
        
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open,
            })}
        >
            {console.log(props.open, ' open on rendenr')}
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                [classes.hide]: props.open,
                })}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Mini variant drawer
            </Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;