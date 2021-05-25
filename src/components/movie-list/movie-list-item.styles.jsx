import { makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';


export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 220
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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