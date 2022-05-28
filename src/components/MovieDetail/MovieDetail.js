import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function MovieDetail() {
  	
	const {id} = useParams();
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		axios.get(`${baseUrl}/movies/${id}`)
        .then(res=>{
            setMovie(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
	}, [id])
  return (
    <div>
      <h1>{movie.title}</h1>
      <button>To favorites</button> 
      <img src={movie.url} alt={movie.title} />
      <p>Date: {movie.date}</p>
      <p>Ticket: {movie.count} </p>
      <button>Buy a Ticket</button>
    </div>
  )
}

export default MovieDetail
