import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function FavMovie() {
  	
	
	const [movies, setMovie] = useState([]);
 
	useEffect(() => {
		axios.get(`${baseUrl}/favorites`)
        .then(res=>{
            setMovie(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
	}, [movies])

  
    
  
  return (
    movies.map(movie=>{
      return (
        <div>

      <h1>{movie.title}</h1>
     
      <img src={movie.url} alt={movie.title} />
      <p>Date: {movie.date}</p>
      <p>Ticket: {movie.count} </p>
     <button >delete favorite</button>
    </div>)

    })
    
  )
}

export default FavMovie
