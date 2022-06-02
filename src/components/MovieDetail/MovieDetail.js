import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useUserInfo } from '../../context/UserProvider';

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
  

  const addToFavorites=()=>{
    
   
    axios.post(`${baseUrl}/favorites`,{
      name:movie.name,
      url:movie.posterUrl,
      count:movie.ticketPrice,
      title:movie.title,
      date:movie.date,
      id:movie.id,
      description:movie.description
    })
    setMovie(movie)
  }
  



  return (
    <Card sx={{ display: 'flex' }} >
    
        <CardMedia
        
          component="img"
          width="700"
        
          image={movie.posterUrl}
          alt={movie.title}/>
        <CardContent>
          <Typography gutterBottom variant="h1" component="div">
          {movie.title}
           
          </Typography>
          <Typography variant="h4" color="text.secondary">
          {movie.description} 
          <p>Ticket: {movie.ticketPrice} AMD</p>
          <button onClick={addToFavorites}>To favorites🧡</button> <button>Buy a Ticket</button>
         
          </Typography>
        </CardContent>
      
    </Card>
  )
}
  
 

export default MovieDetail
