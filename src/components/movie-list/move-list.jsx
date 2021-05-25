import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MovieListItem from './movie-list-item';

const ListWrap = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px 200px;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
`;

const MovieList = () => {
    let 
    const fetchData = async () =>{
        for (let i = 1; i < 5; i++) {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c5c1b8e55a900e3e1d2fde4c8517d44a&page=${i}`)
            .then(res=> {
                a.push(res.data.results)
            })
        }
           
    }

    fetchData();
    
    return ( 
        <ListWrap>
            {console.log(a, ' datatata')}
            <MovieListItem></MovieListItem>
            <MovieListItem></MovieListItem>

            <MovieListItem></MovieListItem>
            <MovieListItem></MovieListItem>
            <MovieListItem></MovieListItem>
            <MovieListItem></MovieListItem>
        </ListWrap>

    );
}
 
export default MovieList;