import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function MovieDetail() {
  	
	const {id} = useParams();
	const [movie, setMovie] = useState([]);
<<<<<<< HEAD
=======
 
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
	useEffect(() => {
		axios.get(`${baseUrl}/movies/${id}`)
        .then(res=>{
            setMovie(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
	}, [id])
<<<<<<< HEAD
  return (
    <div>
      <h1>{movie.title}</h1>
      <button>To favorites</button> 
=======

  const addToFavorites=()=>{
   
    axios.post(`${baseUrl}/favorites`,{
      name:movie.name,
      url:movie.posterUrl,
      count:movie.ticketPrice,
      title:movie.title,
      date:movie.date,
      id:movie.id
    })
    setMovie(movie)
  }
  return (
    <div>
      <h1>{movie.title}</h1>
      <button onClick={addToFavorites}>To favorites🧡</button> 
<<<<<<< HEAD
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
      <img src={movie.url} alt={movie.title} />
=======
      <img src={movie.posterUrl} alt={movie.title} />
>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252
      <p>Date: {movie.date}</p>
      <p>Ticket: {movie.ticketPrice} AMD</p>
      <button>Buy a Ticket</button>
    </div>
  )
}

export default MovieDetail
