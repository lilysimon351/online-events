import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import classes from "./MovieListing.module.css"
import { Link } from 'react-router-dom'

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
                <Link to="/imdbID">
                  <div  className={classes.movieItem} >
                    
                          <img className={classes.image} src={movie.url} alt={movie.title} />
                      <h2>{movie.title} {movie.date}</h2>
                      <h2>{movie.count}</h2>
                     
                  </div>
                   </Link>
              )
          })
      }
    </div>
  )
}

export default MovieListing
