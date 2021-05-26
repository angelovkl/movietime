import React from 'react';
import { ProgressCircle } from 'react-simple-circle-rating';

import { Card, CardMedia, CardContent} from '@material-ui/core';

import { useStyles, MenuWrap, BtnWrap } from './movie-list-item.styles';
import MovieItemMenu from '../menu/movie-item-menu';

const MovieListItem = ({data}) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <MenuWrap>
                <MovieItemMenu></MovieItemMenu>
            </MenuWrap>
            <CardMedia
                className={classes.media}
                image={`http://image.tmdb.org/t/p/w185/${data.poster_path}`}
                title={data.title}
            />
            <BtnWrap>
                <ProgressCircle  percentage={data.vote_average*10}/>
            </BtnWrap>
            <CardContent className={classes.cardContent}>
                <h3 className={classes.title}>
                {data.title}
                </h3>
                <span  className={classes.date}>{data.release_date}</span>
            </CardContent>
        </Card>
    );
}
 
export default MovieListItem;