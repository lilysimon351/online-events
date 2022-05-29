
import { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useDispatch, useSelector } from 'react-redux'
import { getMoviesThunk, removeMovieThunk, selectError, selectMovie, selectStatus } from '../../features/movieSlice';

function AdminMovies () {
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getMoviesThunk())
    }, [dispatch])


    const movies = useSelector(selectMovie);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);


    const navigate = useNavigate();
	const handleClick = () => {
		navigate('add-movie')
	}

    const deleteMovie = (e, id) => {
        dispatch(removeMovieThunk(id));
        handleAlertClick()
    }

    const [open, setOpen] = React.useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleAlertClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Container>
            <h1>Movies</h1>
            <Button variant="contained" onClick={handleClick} sx={{mb: 2}}>Add a Movie</Button>
            
            {status === 'pending' && <h2>Loading...</h2>}
            {error &&  <h2>An error occured. Can't get movies</h2>}
            {
               (movies !== undefined) ? (
                   <>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Movie Title</TableCell>
                                    <TableCell align="right">Edit</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    movies?.map((movie) => {
                                        return (
                                            <TableRow
                                            key={movie.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Link to={`/${movie.id}`}>
                                                        {movie.title}
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Link to={`edit-movie?id=${movie.id}`}>
                                                        <IconButton aria-label="add to favorites">
                                                            <EditRoundedIcon />
                                                        </IconButton>
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="add to favorites" onClick={(e) => deleteMovie(e, movie.id)}>
                                                        <DeleteForeverRoundedIcon />
                                                    </IconButton>    
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        The Movie was successfully deleted!
                        </Alert>
                    </Snackbar>
                   </>


               ) : (<h2>Sorry, there is no movies</h2>)
           
            }

        </Container>
    )
}

export default AdminMovies