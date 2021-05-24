import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';

const Movies = ({open,handleDrawerClose}) => {
    return ( 
        <div>
            <Sidebar open={open} handleDrawerClose={handleDrawerClose}></Sidebar>
        </div>
     );
}
 
export default Movies;