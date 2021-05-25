import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import { makeStyles } from "@material-ui/core";
import styled from 'styled-components';


import MovieList from '../../components/movie-list/move-list';
import { TestContext } from '../../App';



const MovieListWrap = styled.div`
    margin-top: 100px;
    margin-left: ${props => !props.isOpen ? "100px" : "270px"}
`;


const Movies = () => {
    const context = React.useContext(TestContext);

    return ( 
        <div>
            <Sidebar ></Sidebar>
            <MovieListWrap isOpen={context.open}>
                <MovieList ></MovieList>

            </MovieListWrap>
        </div>
     );
}
 
export default Movies;