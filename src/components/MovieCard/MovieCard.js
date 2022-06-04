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


function MovieCard({movie}) {
	
	const navigate = useNavigate()

	const allUsers = useSelector(selectAllUsers)
	const currentUser = useSelector(selectCurrentUser)
	const isAdmin = useSelector(selectIsAdmin)
	const dispatch = useDispatch()

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

	// const style = {
	// 	position: 'absolute',
	// 	top: '50%',
	// 	left: '50%',
	// 	transform: 'translate(-50%, -50%)',
	// 	width: 400,
	// 	bgcolor: 'background.paper',
	// 	border: '2px solid #000',
	// 	boxShadow: 24,
	// 	p: 4,
	// };

	 
	// const [open, setOpen] = React.useState(false);
	// const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

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
				  <IconButton aria-label="buy a ticket" >
					  <LocalMallRoundedIcon />
				  </IconButton>
			  </CardActions>
		  </Card>
	  		{/* <div>
			  <Button onClick={handleOpen}>Open modal</Button>
			  <Modal
				  aria-labelledby="transition-modal-title"
				  aria-describedby="transition-modal-description"
				  open={open}
				  onClose={handleClose}
				  closeAfterTransition
				  BackdropComponent={Backdrop}
				  BackdropProps={{
					  timeout: 500,
				  }}
			  >
				  <Fade in={open}>
					  <Box sx={{ maxWidth: 500} }  >
					  
				  	<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
							
							component="img"
							height="200"
							image={movie.posterUrl}
							alt={movie.title}/>
							<CardContent>
							<Typography gutterBottom variant="h5" component="div">
							{movie.title}
							
							</Typography>
							<Typography variant="body2" color="text.secondary">
							{movie.description} 
							<p>Ticket: {movie.ticketPrice} AMD</p>
							<button onClick={addToFavs}>To favorites</button> <button >Buy a Ticket</button>
							
							</Typography>
							</CardContent>
						</CardActionArea>
						</Card>
						</Box>
				  </Fade>
			  </Modal>
		  </div> */}
		  
		</>
	);
}
	


export default MovieCard
