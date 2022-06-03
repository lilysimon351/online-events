import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../API/Api'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
function SingleFav({movie}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (

        <ImageListItem >
        <Modal
              key={movie.id}
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
                <Box sx={{ maxWidth: 500 }}>

                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia

                        component="img"
                        height="200"
                        image={movie.url}
                        
                        alt={movie.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {movie.description}
                          {movie.ticketPrice} 
                          

                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Fade>
         </Modal>
         <img
           src={`${movie.url}?w=248&fit=crop&auto=format`}
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

       </ImageListItem>
    )
}
export default SingleFav