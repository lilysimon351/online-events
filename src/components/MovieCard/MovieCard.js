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
}

export default MovieCard
