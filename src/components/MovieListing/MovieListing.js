import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import classes from "./MovieListing.module.css"
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
<<<<<<< Updated upstream

function MovieListing() {
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
  return (
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
  )
}

export default MovieListing
