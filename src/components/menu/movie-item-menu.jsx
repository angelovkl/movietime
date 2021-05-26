import React from 'react';

import { ListItemIcon, ListItemText, IconButton} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { StyledMenu, StyledMenuItem } from './movie-item-menu.styles';

const MovieItemMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };
  
  return ( 
    <div style={{opacity:"0.8", padding: "10px"}}>
      <IconButton style={{backdropFilter: "blur(11px)", background: "white"}} onClick={handleClick} aria-label="settings">
        <MoreVertIcon />
      </IconButton>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add to list" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Watchlist" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Your rating" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
 
export default MovieItemMenu;