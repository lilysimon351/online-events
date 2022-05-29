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


function MovieCard({movie}) {

  return ( 
	<Link to={`${movie.id}`} key={movie.id}>
		<Card>

			<CardMedia
				component="img"
				height="270"
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
