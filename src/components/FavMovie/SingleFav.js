import React, { useEffect, useState } from 'react'
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, selectCurrentUser, selectIsAdmin } from './../../features/user/userSlice';
import { changeUserInfoThunk } from '../../features/user/thunks/changeUserInfo';

function SingleFav({movie}) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const allUsers = useSelector(selectAllUsers)
	const currentUser = useSelector(selectCurrentUser)
	const isAdmin = useSelector(selectIsAdmin)
	const dispatch = useDispatch()

  const removeFromFav = () => {
			const userInfo = allUsers?.find(item => item.username === currentUser);
      const favorites = userInfo?.favorites?.filter( id => id !== movie.id);
			dispatch(changeUserInfoThunk({
				...userInfo,
				favorites
			}))
  }
    return (

        <ImageListItem>
          <IconButton
               onClick={removeFromFav}
               sx={{ color: 'red', position: 'absolute', right: '10px' }}
               aria-label={`info about ${movie.title}`}
             >
                 <DeleteForeverRoundedIcon />
             </IconButton>

         <img
           src={`${movie.posterUrl}?w=248&fit=crop&auto=format`}
           srcSet={`${movie.id}?w=248&fit=crop&auto=format&dpr=2 2x`}
           alt={movie.title} />
         <ImageListItemBar
           title={movie.title}
           subtitle={movie.author}
           actionIcon={
             <IconButton
               onClick={handleOpen}
               sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
               aria-label={`info about ${movie.title}`}
             >
                 <InfoIcon />
             </IconButton>
           } 
         />


          <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}
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
            
              <Fade in={open} >
                <Box sx={{ maxWidth: 500, width: '100%', margin: 'auto' }}>

                  <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                    <CardActionArea>
                      <CardMedia

                        component="img"
                        height="200"
                        image={movie.posterUrl}
                        
                        alt={movie.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {movie.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {movie.ticketPrice}  AMD
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Fade>
         </Modal>

       </ImageListItem>
    )
}
export default SingleFav