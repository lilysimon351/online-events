import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsAdmin } from './../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';


function MovieCard({movie}) {
	
	const navigate = useNavigate()
	const currentUser = useSelector(selectCurrentUser)
	const isAdmin = useSelector(selectIsAdmin)

	const addToFavs = () => {
		if(!currentUser) {
			navigate('/auth')
		} else if (isAdmin) {
			return false;
		} else {

		}
	}

  return ( 
	<Link to={`/${movie.id}`} key={movie.id}>
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
				<IconButton aria-label="add to favorites" onClick={addToFavs}>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="buy a ticket">
					<LocalMallRoundedIcon />
				</IconButton>
			</CardActions>
		</Card>
	</Link>
  )
}

export default MovieCard
