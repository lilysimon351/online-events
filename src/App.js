import React from 'react';
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
<<<<<<< HEAD


import FavMovie from './components/FavMovie/FavMovie';
<<<<<<< HEAD
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d


>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252
function App() {
  return (
    <div className='app'>
		<Header/>
		<Routes>
<<<<<<< HEAD
<<<<<<< HEAD
			<Route path='home' element={<Home/>}/> 
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path='auth' element ={<AuthComponent/>}/>
			<Route path='movies/:id' element={<MovieDetail />} />
			<Route path="*" element={<Navigate to ='home' /> }/>
=======
			<Route path="/home" element={<Home/>}/> 
=======
			<Route path="/home" element={<Home/>} />
			<Route path="home/:id" element={<MovieDetail />} />
>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path='auth' element ={<AuthComponent/>}/>
			<Route path="favorite" element={<FavMovie/>} />

			<Route path="admin" element= {<Admin />}>
				<Route index element={<AdminMovies />} />
				<Route path="add-movie" element={<AddMovie />} />
				<Route path="edit-movie" element={<EditMovie />} />
			</Route>
			
			<Route path="*" element={<PageNotFound /> }/>
     
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
		</Routes>
		<Footer/>
      
    </div>
   

  );
}

export default App;
