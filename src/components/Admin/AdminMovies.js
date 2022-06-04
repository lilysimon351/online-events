
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
import Snackbar from '@mui/material/Snackbar';

import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectMovies, selectStatus } from '../../features/movie/movieSlice';
import { removeMovieThunk } from '../../features/movie/thunks/remove';
import Alert from '@mui/material/Alert';

function AdminMovies () {
    const dispatch = useDispatch();
    
    const movies = useSelector(selectMovies);
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
            
            {
               (movies !== undefined && movies.length !== 0) ? (
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
                                                        <IconButton aria-label="edit movie" title="edit movie">
                                                            <EditRoundedIcon />
                                                        </IconButton>
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="delete movie" title="delete movie" onClick={(e) => deleteMovie(e, movie.id)}>
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
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                        <div>
                            {error &&  (
                                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                                    An error occured: {error}
                                </Alert>
                            )}
                            {status === 'fulfilled' && (
                                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                                The Movie was successfully deleted!
                                </Alert>
                            )}
                        </div>
                    </Snackbar>
                   </>
               ) : (<h2>Sorry, there is no movies</h2>)
           
            }

        </Container>
    )
}

export default AdminMovies