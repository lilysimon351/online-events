<<<<<<< HEAD
<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../API/Api';
import classes from "./MovieListing.module.css";
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
=======
import axios from 'axios'
=======
>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252
import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
<<<<<<< HEAD
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
=======
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesThunk, selectError, selectMovie, selectStatus } from '../../features/movieSlice';
>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252

function MovieListing() {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getMoviesThunk())
    }, [dispatch])

    const movies = useSelector(selectMovie);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    
  return (
    <Container>
        <Grid container spacing={3} sx={{margin: "2.5rem 0", }}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error &&  <h2>An error occured. Can't get movies</h2>}
            {
               movies ? (
                movies?.map((movie) => {
                    return (
                        <Grid item xs={4} key={movie.id}>
                            <MovieCard movie={movie}  />
                        </Grid>
                        
                    )
                })
               ) : (<h2>Sorry, there is no movies</h2>)
           
            }
            
        </Grid>
    </Container>
  )
}

export default MovieListing
