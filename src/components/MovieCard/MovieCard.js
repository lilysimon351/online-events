<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useUserInfo } from '../../context/UserProvider';
import classes from "./MovieCard.module.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';


function MovieCard({movie}) {
	const {user} = useUserInfo()

  return ( 
	<Link to={`/home/${movie.id}`} key={movie.id}>
		<Card>

			<CardMedia
				component="img"
				height="370"
				image={movie.posterUrl}
				alt={movie.title}
			/>

			<CardHeader
				title={movie.title}
			/>

			<CardContent>
				<Typography variant="body2">
					{movie.date}
				</Typography>
				<Typography variant="body2">
					{movie.ticketPrice} AMD
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
					{
					user && <button className={classes.like}>To favorites</button> 
					}
				</IconButton>
				<IconButton aria-label="buy a ticket">
					<LocalMallRoundedIcon />
				</IconButton>
			</CardActions>
		</Card>
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
