
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { memo, useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieThunk, selectStatus, selectError } from '../../features/movieSlice';
import { v1 } from 'uuid';
import { Link } from 'react-router-dom';



function AddMovie() {
    
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const posterUrlRef = useRef();
    const ticketPriceRef = useRef(0);
    const ticketAmountRef = useRef(0);

    const sendData = () => {
        const movie = {
            'id': v1(),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value ,
            posterUrl: posterUrlRef.current.value || "https://via.placeholder.com/350",
            ticketPrice: ticketPriceRef.current.value || 0,
            ticketAmount: ticketAmountRef.current.value || 0,
        }
        dispatch(addMovieThunk(movie))

        titleRef.current.vaue = ''
        descriptionRef.current.vaue = ''
        dateRef.current.vaue = ''
        posterUrlRef.current.vaue = ''
        ticketPriceRef.current.vaue = ''
        ticketAmountRef.current.vaue = ''
    }
  return (
    <div>
        <h1>Add a Movie</h1> 
        <p>Back to <Link to="/admin">admin</Link> </p>
        <form onSubmit={(e) => e.preventDefault()}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '100%' },
                    width: '450px',
                }}
            >
                <TextField
                    inputRef={titleRef}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} 
                    margin="dense"
                    label="Title"
                />
                <TextField
                    inputRef={descriptionRef}

                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="dense"
                    label="Description"
                />
                <TextField
                    inputRef={dateRef}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="date"
                    margin="dense"
                    label="Date"
                />
                <TextField
                    inputRef={posterUrlRef}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="url"
                    margin="dense"
                    label="Poster URL"
                />
                <TextField
                    inputRef={ticketPriceRef}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="number"
                    margin="dense"
                    label="Ticket Price"
                />
                <TextField
                    inputRef={ticketAmountRef}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="number"
                    margin="dense"
                    label="Tickets Amount"
                />
                <Button type="password" variant="contained" size="large" sx={{mt: 2}}
                    onClick={sendData}
                    >
                        Add The Movie
                </Button>
            </Box>
        </form>
        {/* {status === 'pending' && <h2>Loading...</h2>}
        {error &&  <h2>An error occured: {error}</h2>}
        {status === 'fulfilled' && <h2>Movie Added</h2>} */}
    </div>
  )
}


export default memo(AddMovie);