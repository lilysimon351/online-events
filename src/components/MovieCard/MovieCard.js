import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
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
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import axios from 'axios';
import { baseUrl } from '../../API/Api'

function MovieCard({movie}) {
	
	const {user} = useUserInfo()
	const navigate = useNavigate()
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	  };
	  
	const [singleMovie, setMovie] = useState([]);
	  const addToFav = (e) => {
		  e.stopPropagation()
			addToFavorites()
	  }
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
	 
	  
  
		const [open, setOpen] = React.useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);

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
					  {user && <button className={classes.like}>To favorites</button>}
				  </IconButton>
				  <IconButton aria-label="buy a ticket" >
					  <LocalMallRoundedIcon />
				  </IconButton>
			  </CardActions>
		  </Card>
	  		<div>
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
          <button onClick={addToFavorites}>To favorites</button> <button >Buy a Ticket</button>
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	</Box>
				  </Fade>
			  </Modal>
		  </div></>
	  );
	}
	


export default MovieCard
