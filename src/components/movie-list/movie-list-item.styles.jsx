import styled from 'styled-components';

import { makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

export const MenuWrap = styled.div`
    text-align: right;
    float: right;
`;
export const BtnWrap = styled.div`
    position: relative;
    display: flex;
    bottom: 25px;
    padding: 0px 0px 0px 15px;
    backdrop-filter: blur(5px);
`;

export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 220
    },
    media: {
      height: 200,
      paddingTop: '100%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardContent:{
      textAlign: "left",
      paddingTop: 0
    },
    title: {
      margin: 0
    }
  }));