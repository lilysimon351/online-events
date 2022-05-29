<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../API/Api';
import classes from "./MovieListing.module.css";
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
=======
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import classes from "./MovieListing.module.css"
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d

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
  )
}

export default MovieListing
