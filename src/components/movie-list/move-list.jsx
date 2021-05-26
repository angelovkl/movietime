import React from 'react';
import axios from 'axios';

import MovieListItem from './movie-list-item';

import {
    Button, 
    Typography, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    FormGroup, 
    FormControlLabel, 
    Checkbox, 
    Divider
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyles, ContentWrap, AccordeonWrap, MainWrap, ListWrap } from './movie-list.styles';

const MovieList = () => {
    const classes = useStyles();
    const [pages, setPages] = React.useState(1);
    const [data, setData] = React.useState([])
    const [disabledFilterButton, setDisabledFilterButton] = React.useState(true)
    const [genres, setGenres] = React.useState([]);

    let filterClicked = false;
    let selectedGenres = genres.filter(e=> e.checked)
   
    const fetchData = async () =>{
        let values=[];
        selectedGenres.forEach(a =>{
            values.push(a.id)
        })
        values = values.join();
        const fetchData1 = async () => {
            return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c5c1b8e55a900e3e1d2fde4c8517d44a&page=${pages}&with_genres=${values.toString()}`);
        }

        fetchData1().then(res=> {
            let a = data;
            if(filterClicked){
                if(res.data.results){
                    return setData(
                        [...res.data.results ]
                    )
                }
            }else{
                return setData(
                    [...a, ...res.data.results ]
                )
            }
        })
    }

    const fetchGenres = async () =>{
        const fetchData = async () => {
            return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c5c1b8e55a900e3e1d2fde4c8517d44a`);
        }
        fetchData().then(res=> {
            let a = res.data.genres.map(item=>(
                {
                    ...item,
                    checked: false
                }
            ))
            return setGenres(a)
        })
    }

    const loadMore = () =>{
        setPages(pages + 1)
    }

    const handleFilterChange = (event) => {
        filterClicked = false
        setDisabledFilterButton(false)
        let z = genres.map(i=>(
            i.name === event.target.name ?
            {
                ...i,
                checked: i.checked ? false : true
            }
            :
            {
                ...i                
            }
        ))
        setGenres(z);
    };

    const handleFilter = (event) => {
        setDisabledFilterButton(true)
        filterClicked = true;
        fetchData();
    };

    React.useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pages]) 
    
    React.useEffect(() => {
        fetchGenres();
    }, []) 
   
    return ( 
        <div>
            <MainWrap>
                <AccordeonWrap >
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon  />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"     
                        >
                            <SearchIcon/>
                            <Typography  >Filter</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <h4>Genres</h4>
                                <Divider light />
                                <FormGroup row>
                                    {
                                        genres &&
                                        genres.map((item,index)=>{
                                            return <FormControlLabel key={index}
                                            control={<Checkbox key={item.id} checked={item.checked} onChange={handleFilterChange} name={item.name} />}
                                            label={item.name}
                                        />
                                        })
                                    }
                                </FormGroup>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Button disabled={disabledFilterButton} className={classes.filterBtn} onClick={handleFilter} variant="contained">Filter</Button>
                </AccordeonWrap>    
                <ContentWrap>
                    <ListWrap>
                        {
                            data &&
                            data.map(e =>{
                                return <MovieListItem key={e.id} data={e} />
                            })
                        }
                    </ListWrap>
                    {
                    data.length !== 0 ?
                        <Button className={classes.btn} onClick={loadMore} variant="contained">Load More</Button>
                    : selectedGenres.length !== 0 ?
                        <p>No items were found that match your query.</p>
                    :
                        <p>Loading</p>
                    }
                </ContentWrap>   
            </MainWrap>       
        </div>
    );
}
 
export default MovieList;