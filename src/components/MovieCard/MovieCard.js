<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useUserInfo } from '../../context/UserProvider';
import classes from "./MovieCard.module.css"

function MovieCard({movie}) {
	const {user} = useUserInfo()

  return ( 
	<Link to={`/movies/${movie.id}`} key={movie.id}>
		<div className={classes.movieItem} >
			<img className={classes.image} src={movie.url} alt={movie.title} />
			<h2>{movie.title} {movie.date}</h2>
			<h2>{movie.count}</h2>
			{
			 user && <button className={classes.like}>To favorites</button> 
			}
			
		</div>
	</Link>
  )
=======
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../API/Api' 
import classes from "./MovieCard.module.css"
import { Link } from 'react-router-dom'

function MovieCard({onClick}) {
  
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
  <div className={classes.contenier} >
    
    {
      
        movies.map((movie,index)=>{
            return (
                
                <Link key={index} to={`/movie/${movie.id}`} onClick={(e)=>{
                 
                 return ( e.target.value)
                  
                 
                }}>
               
                 </Link>
                  
             
            )
        })
    }
  </div>
)
>>>>>>> Stashed changes
}

export default MovieCard
