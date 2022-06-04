import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectMovies } from '../../features/movie/movieSlice';

function MovieDetail() {
  const {t, changeLanguage} = useTranslate()
  	
	const {id} = useParams();
  const movies = useSelector(selectMovies)
  const navigate = useNavigate()
  const movie = movies?.find( item => item.id === id)
  
  return (
    ( movie ? (
          <Card sx={{ display: 'flex' }} >
        
          <CardMedia
          
            component="img"
            width="600"
          
            image={movie.posterUrl}
            alt={movie.title}/>
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
            {movie.title}
            
            </Typography>
            <Typography variant="h4" color="text.secondary">
            {movie.description}
          
            </Typography>
          </CardContent>
        
      </Card>
    ) : (<Navigate to="/" />))

  )
}
  
 

export default MovieDetail
