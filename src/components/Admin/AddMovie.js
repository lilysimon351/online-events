
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { memo, useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectError } from '../../features/movie/movieSlice';
import { addMovieThunk } from '../../features/movie/thunks/add';
import { v1 } from 'uuid';
import { Link } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



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
        handleAlertClick()
        titleRef.current.value = ''
        descriptionRef.current.value = ''
        dateRef.current.value = ''
        posterUrlRef.current.value = ''
        ticketPriceRef.current.value = ''
        ticketAmountRef.current.value = ''
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
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
            <div>
                {error &&  (
                    <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                        An error occured: {error}
                    </Alert>
                )}
                {status === 'fulfilled' && (
                    <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    The Movie was successfully added!
                    </Alert>
                )}
            </div>
        </Snackbar>
    </div>
  )
}


export default memo(AddMovie);