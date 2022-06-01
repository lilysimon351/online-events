import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesThunk, selectError, selectMovie, selectStatus } from '../../features/movieSlice';
>>>>>>> 3a4454ed08a820f2e2bcbf0cffe6ab7c44100546

function MovieListing() {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getMoviesThunk())
    }, [dispatch])

    const movies = useSelector(selectMovie);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    
  return (
<<<<<<< HEAD
    <div className={classes.contenier}>
      {
          movies.map((movie)=>{
              return (
                  <MovieCard movie={movie} key={movie.id} />
              )
          })
      }
    </div>
=======
function MovieListing({onClick}) { 
  const [movies,setMovies]=useState([])
  useEffect(()=>{
      fetchMovies()
  },[])
  const fetchMovies=()=>{
      axios.get(`${baseUrl}/movies`)
      .then(res=>{
          setMovies(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
      
  }
  return(
    
      
      <div  className={classes.contenier}>    
                     
     {
      
      movies.map((movie)=>{
          return (
              
             <div className={classes.movieItem}>

              <img className={classes.image} src={movie.url} alt={movie.title} />
              <h2>{movie.title} {movie.date}</h2>
              <h2>{movie.count}</h2>

            </div>
              
                
           
          )
      })
  }
      </div>      
    
    
>>>>>>> Stashed changes
=======
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
>>>>>>> 3a4454ed08a820f2e2bcbf0cffe6ab7c44100546
  )
}

export default MovieListing
