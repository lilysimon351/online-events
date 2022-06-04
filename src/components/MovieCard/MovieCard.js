import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
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
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, selectCurrentUser, selectIsAdmin } from './../../features/user/userSlice';
import { changeUserInfoThunk } from '../../features/user/thunks/changeUserInfo';
import { editMovieThunk } from './../../features/movie/thunks/edit';


import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function MovieCard({movie}) {
	
	const navigate = useNavigate()

	const allUsers = useSelector(selectAllUsers)
	const currentUser = useSelector(selectCurrentUser)
	const isAdmin = useSelector(selectIsAdmin)
	const dispatch = useDispatch()


	const [open, setOpen] = useState(false);

	const handleAlertClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const addToFavs = () => {
		if(!currentUser) {
			navigate('/auth')
		} else if (isAdmin) {
			return false;
		} else {
			const userInfo = allUsers.find(item => item.username === currentUser)
			dispatch(changeUserInfoThunk({
				...userInfo,
				favorites: [...userInfo.favorites, movie.id]
			}))
		}
	}
	
	const addToFav = (e) => {
		e.stopPropagation()
		addToFavs()
	}
	const addToTicets=()=>{
	if(!currentUser) {
		navigate('/auth')
	} else if (isAdmin) {
		return false;
	} else {
		const userInfo = allUsers.find(item => item.username === currentUser)
		if(+userInfo.balance > +movie.ticketPrice) {
			dispatch(changeUserInfoThunk({
				...userInfo,
				buyedTickets: [...userInfo.buyedTickets, movie.id],
				balance: (+userInfo.balance - +movie.ticketPrice)
			}))
			dispatch(editMovieThunk({
				...movie,
				ticketAmount: +movie?.ticketAmount - 1
			}))
		} else {
			setOpen(true);
		}

	}
	}
	const addToTicet=(e)=>{
	e.stopPropagation()
	addToTicets()
	}


  	return ( 
		<>
		  <Card onClick={(e) => navigate(`/${movie.id}`)}  key={movie.id}>

			<CardMedia
				  component="img"
				  height="370"
				  image={movie.posterUrl}
				  alt={movie.title} />

			  <CardHeader
				  title={movie.title} />

			  <CardContent>
				  <Typography variant="body2">
					  {movie.date}
				  </Typography>
				  <Typography variant="body2">
					  {movie.ticketPrice} AMD
				  </Typography>
			  </CardContent>

			  <CardActions disableSpacing>
				  <IconButton aria-label="add to favorites" onClick={addToFav}>
					  <FavoriteIcon />
				  </IconButton>
				  <IconButton aria-label="buy a ticket"  onClick={addToTicet}>
					  <LocalMallRoundedIcon />
				  </IconButton>
			  </CardActions>
		  </Card>
		  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
            
				<Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
					Low Balance
				</Alert>
                
        </Snackbar>
		</>
	);
}
	


export default MovieCard
