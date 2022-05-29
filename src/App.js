import React from 'react';
import {Routes,Route, Navigate } from 'react-router-dom';
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
function App() {
  return (
    <div className='app'>
		<Header/>
		<Routes>
			{/* <Route path="/">
				<Route index element={<Home/>} />
				<Route path=":id" element={<MovieDetail />} />
			</Route> */}
			<Route path="/" element={<Home/>} />
			<Route path="/:id" element={<MovieDetail />} />
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path="admin" element= {<Admin />}>
				<Route index element={<AdminMovies />} />
				<Route path="add-movie" element={<AddMovie />} />
				<Route path="edit-movie" element={<EditMovie />} />
			</Route>
			<Route path="*" element={<PageNotFound /> }/>
		</Routes>
		<Footer/>
      
    </div>
   

  );
}

export default App;
