
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from 'react-router-dom';
import { getSingleMovieThunk, editMovieThunk, selectError, selectMovie, selectStatus } from "../../features/movieSlice"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

function EditMovie() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getSingleMovieThunk(id))
    }, [dispatch])


    const movie = useSelector(selectMovie);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const posterUrlRef = useRef();
    const ticketPriceRef = useRef();
    const ticketAmountRef = useRef();

    const sendData = () => {
        const movie = {
            id,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value || Date.now(),
            posterUrl: posterUrlRef.current.value,
            ticketPrice: ticketPriceRef.current.value || 0,
            ticketAmount: ticketAmountRef.current.value || 0,
        }
        dispatch(editMovieThunk(movie))

    }

    return (
        <>

        { id ? (
            <>
                <h1>Edit Movie {movie.title}</h1>
                <p>Go to <Link to="/admin">All Movies</Link> </p>

                <form onSubmit={(e) => e.preventDefault()}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '100%' },
                    width: '450px',
                    margin: "0 auto"
                }}
            >
                <TextField
                    inputRef={titleRef}
                    defaultValue={movie.title}
                    InputLabelProps={{
                      shrink: true,
                    }} 
                    margin="dense"
                    label="Title"
                />
                <TextField
                    inputRef={descriptionRef}
                    defaultValue={movie.description}

                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="dense"
                    label="Description"
                />
                <TextField
                    inputRef={dateRef}
                    defaultValue={movie.date}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="date"
                    margin="dense"
                    label="Date"
                />
                <TextField
                    inputRef={posterUrlRef}
                    defaultValue={movie.posterUrl}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="url"
                    margin="dense"
                    label="Poster URL"
                />
                <TextField
                    inputRef={ticketPriceRef}
                    defaultValue={movie.ticketPrice}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="number"
                    margin="dense"
                    label="Ticket Price"
                />
                <TextField
                    inputRef={ticketAmountRef}
                    defaultValue={movie.ticketAmount}
                   
                    InputLabelProps={{
                      shrink: true,
                    }} type="number"
                    margin="dense"
                    label="Tickets Amount"
                />
                <Button type="password" variant="contained" size="large" sx={{mt: 2}}
                    onClick={sendData}
                    >
                        Edit Movie
                </Button>
            </Box>
        </form>
                
            </>
            
        ) : (
            <>
                <h1>Select a Movie to Edit</h1>
                <p>Go to <Link to="/admin">All Movies</Link> </p>
               
            </>
        )}        
        
        </>

    )
}

export default EditMovie