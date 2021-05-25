import React from 'react';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { useStyles } from './sidebar.styles';
import { TestContext } from '../../App';

const Sidebar = (props) => {
    const context = React.useContext(TestContext);

    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerClose = () => {
        context.handleDrawerClose(false)
    };

    return ( 

        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: context.open,
            [classes.drawerClose]: !context.open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: context.open,
                [classes.drawerClose]: !context.open,
            }),
            }}
        >
            <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
            <Divider />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={!props.open ? {display : `none`} : {display : `block`}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"     
                    >
                        <SearchIcon/>
                        <Typography style={!props.open ? {display : `none`} : {display : `block`}} >Filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
        </Drawer>
     );
}
 
export default Sidebar;