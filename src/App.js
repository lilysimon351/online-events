import React from 'react';
import {Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
<<<<<<< HEAD
import Header from './components/Header/Header';
=======
import Header from "./components/Header/Header"
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
import AboutUs from './components/AboutUs/AboutUs';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import AuthComponent from './components/Auth/AuthComponent';
<<<<<<< HEAD

=======
import FavMovie from './components/FavMovie/FavMovie';
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
function App() {
  return (
    <div className='app'>
		<Header/>
		<Routes>
<<<<<<< HEAD
			<Route path='home' element={<Home/>}/> 
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path='auth' element ={<AuthComponent/>}/>
			<Route path='movies/:id' element={<MovieDetail />} />
			<Route path="*" element={<Navigate to ='home' /> }/>
=======
			<Route path="/home" element={<Home/>}/> 
			<Route path='aboutUs' element ={<AboutUs/>}/>
			<Route path='auth' element ={<AuthComponent/>}/>
			<Route path="movies/:id" element={<MovieDetail />} />
      <Route path="favorite" element={<FavMovie/>} />
			<Route path="*" element={<Navigate to ='home' /> }/>
     
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
		</Routes>
		<Footer/>
      
    </div>
   

  );
}

export default App;
