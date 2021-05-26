import styled from 'styled-components';

import { makeStyles } from "@material-ui/core";

export const ListWrap = styled.div`
    display: grid;
    grid-column-gap: 10px;

    @media (min-width: 480px) {
        grid-template-columns: 150px;
        grid-row-gap: 10px;
        
    }
    @media (min-width: 768px) {
        grid-template-columns: 200px 200px;
        grid-row-gap: 15px;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 200px 200px 200px;
        grid-row-gap: 20px;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 200px 200px 200px 200px 200px;
        grid-row-gap: 30px;
    }
`;

export const MainWrap = styled.div`
    display: grid;
    grid-template-columns: 20em 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 40px;

    @media (min-width: 480px) {
         grid-column-gap: 0px;
    }
`;

export const AccordeonWrap = styled.div`
    padding: 0px 30px 0px 30px !important
`;

export const ContentWrap = styled.div`
   
`;

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    btn:{
        width: "30%",
        background:"#C3073F",
        margin: "30px 0 30px 0;",
        fontSize:" 25px",
        color: "white",
        '&:hover': {
            background: "#950740",
         },
    },
    filterBtn:{
        background: "#C3073F",
        width: "100%",
        margin: "15px 0px 0px 0px",
        color: "white",
        '&:hover': {
            background: "#950740",
         },
    }
}));