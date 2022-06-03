import React, { useEffect } from 'react';
import {Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from "./components/Header/Header"
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
import { useDispatch } from 'react-redux';
import { getMoviesThunk } from './features/movie/thunks/get';
import { useUserInfo } from './context/UserProvider';
import { getUsersThunk } from './features/user/thunks/getUsers';

function App() {
	const dispatch = useDispatch(); 
	const dispatch2 = useDispatch()

	const {user,setUser} = useUserInfo()
	console.log('user', user)
	const isAdmin = user?.username === 'admin' && user?.role === 'admin';
	useEffect(() => {
		console.log("app UF")
		dispatch(getMoviesThunk());
		dispatch2(getUsersThunk())
	}, [])

  return (
    <div className='app'>
		<Header/>
		<Routes>
			<Route path="home" element={<Home/>} />
			<Route path="home/:id" element={<MovieDetail />} />
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path='auth' element ={<AuthComponent/>}/>
			<Route path="favorite" element={<FavMovie/>} />
			<Route path="profile" element={<Profile/>} />
			{/* { isAdmin && ( */}
				<Route path="admin" element= {<Admin />}>
					<Route index element={<AdminMovies />} />
					<Route path="add-movie" element={<AddMovie />} />
					<Route path="edit-movie" element={<EditMovie />} />
				</Route>
			{/* ) } */}

			
			<Route path="*" element={<PageNotFound /> }/>
     
		</Routes>
		<Footer/>
      
    </div>
   

  );
}

export default App;
