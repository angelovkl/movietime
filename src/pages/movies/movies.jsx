import React from 'react';

import styled from 'styled-components';

import MovieList from '../../components/movie-list/move-list';

const MovieListWrap = styled.div`
    margin: 50px 0 0 0;
`;

const Movies = () => {

    return ( 
        <div>
            <MovieListWrap>
                <MovieList ></MovieList>
            </MovieListWrap>
        </div>
     );
}
 
export default Movies;