import React from 'react';
import {Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from "./components/Header/Header"
import AboutUs from './components/AboutUs/AboutUs';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
function App() {
  return (
    <div className='app'>
		<Header/>
		<Routes>
			<Route path="/" element={<Home/>}/> 
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path="movies/:id" element={<MovieDetail />} />
			<Route path="*" element={<PageNotFound /> }/>
		</Routes>
		<Footer/>
      
    </div>
   

  );
}

export default App;
