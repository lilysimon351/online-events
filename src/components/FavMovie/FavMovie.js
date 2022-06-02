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

import Typography from '@mui/material/Typography';
function FavMovie({movie}) {
 
  	const dzuk=""
	
	const [movies, setMovies] = useState([]);
 
	useEffect(() => {
		axios.get(`${baseUrl}/favorites`)
        .then(res=>{
            setMovies(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
	}, [])
    
  
  
  const [open, setOpen] = React.useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);
    
    const {id}=useParams()
  return (
  
    <ImageList sx={{ width: "100%", height: "100vh" }} cols={4} >
      {movies.map((item) =>  (
      
       <ImageListItem >
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.id}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title} />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={<IconButton
              
            
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
            </IconButton>} 
            
            />
     
        </ImageListItem>
            
      ))}
    
       
      
            
    </ImageList>
    
    
  );
}


  
  
    

    
    
  


export default FavMovie
