import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { LANGUAGES } from "../../helpers/constants";
import { useTranslate } from "../../context/LanguageProvider";
import {HEADER_LINKS} from "../../helpers/constants";

function MovieDetail() {
  const {t, changeLanguage} = useTranslate()
  	
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
      </div>

  )
  const ddToFavorites = () => {
   
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

      <img src={movie.url} alt={movie.title} />

      <img src={movie.posterUrl} alt={movie.title} />

      <p>Date: {movie.date}</p>
      <p>Ticket: {movie.ticketPrice} AMD</p>
      <button>Buy a Ticket</button>
    </div>
  )
}

export default MovieDetail
