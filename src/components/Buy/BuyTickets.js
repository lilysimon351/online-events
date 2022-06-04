import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovies } from '../../features/movie/movieSlice';
import { selectCurrentUser, selectAllUsers } from './../../features/user/userSlice';
import SingleBuy from './SingleBuy';

function BuyTickets({movie}) {

	const currentUser = useSelector(selectCurrentUser)
	const allUsers = useSelector(selectAllUsers);
	const userInfo = allUsers?.find(item => item.username === currentUser);
	const favorites = userInfo?.buyedTickets;
	
	const allMovies = useSelector(selectMovies);
	let movies = favorites?.map( item => allMovies.find( itemMovie => itemMovie.id === item))
	movies = movies?.filter( item => item)

  return (
  
    <>
	
    { movies?.length ? (
		<ImageList sx={{ width: "100%", height: "100vh", justifyContent: 'center' }} cols={4} >
			{
				movies?.map((item) =>  {
					if(item) {
						return  (
							<SingleBuy key={item.id} movie={item}/>
						)
						}
					}
				)
			}
		</ImageList>
		) : (
			<p style={{textAlign: 'center'}}>You don't have any Buyed Tickets. <br/>	<Link to='/'> Add Some!</Link></p>
		)
	}
	</>
  );
}

export default BuyTickets
