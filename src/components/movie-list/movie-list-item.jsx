import React from 'react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {useStyles} from './movie-list-item.styles';
import styled from 'styled-components';
import { ProgressCircle } from 'react-simple-circle-rating';

import MovieItemMenu from '../menu/movie-item-menu';

const MenuWrap = styled.div`
    text-align: right;
    float: right;
`;
const BtnWrap = styled.div`
    position: relative;
    display: flex;
    bottom: 25px;
    padding: 0px 0px 0px 15px;
`;

const MovieListItem = () => {
    const classes = useStyles();
   

    return ( 
        <Card className={classes.root}>
            <MenuWrap>
                <MovieItemMenu></MovieItemMenu>
            </MenuWrap>
       
            <CardMedia
                className={classes.media}
                image="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                title="Paella dish"
            >
            </CardMedia>
            <BtnWrap>
                <ProgressCircle  percentage={77}/>
            </BtnWrap>
            
            <CardContent className={classes.cardContent}>
                <h3 className={classes.title}>
                    This impressive
                </h3>
                <span  className={classes.date}>asdasd</span>
            </CardContent>
            
        
        </Card>
  );

}
 
export default MovieListItem;