import React, { useEffect } from 'react';
import {Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Admin from './components/Admin/Admin';
import AddMovie from './components/Admin/AddMovie';
import AdminMovies from './components/Admin/AdminMovies.js';
import EditMovie from './components/Admin/EditMovie';
import AuthComponent from './components/Auth/AuthComponent';
import FavMovie from './components/FavMovie/FavMovie';
import Profile from './components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesThunk } from './features/movie/thunks/get';
import { getUsersThunk } from './features/user/thunks/getUsers';
import { selectIsAdmin } from './features/user/userSlice';
import HomeLayout from './components/Home/HomeLayout';
import BuyTickets from './components/Buy/BuyTickets';



function App() {
	const isAdmin = useSelector(selectIsAdmin);
	const dispatch = useDispatch(); 
	
	useEffect(() => {
		dispatch(getMoviesThunk());
		dispatch(getUsersThunk())
	}, [])

  return (
    <div className='app'>
		<Header/>
		<Routes>
			<Route path="/" element={<HomeLayout />} >
				<Route index element={<Home />} />
				<Route path=":id" element={<MovieDetail />} />
			</Route>
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path='auth' element ={<AuthComponent/>}/>
			<Route path="favorite" element={<FavMovie />} />
			<Route path="buyedTickets" element={<BuyTickets/>} />
			<Route path="profile" element={<Profile/>} />

			{ isAdmin && (
				<>
				{isAdmin}
					<Route path="admin" element= {<Admin />}>
					<Route index element={<AdminMovies />} />
					<Route path="add-movie" element={<AddMovie />} />
					<Route path="edit-movie" element={<EditMovie />} />
				</Route>
				</>

			)}

			<Route path="*" element={<PageNotFound /> } />
		</Routes>
		<Footer/>
    </div>
   
  );
}

export default App;
