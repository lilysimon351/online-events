import React from 'react';
import {Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from "./components/Header/Header"
import MovieCard from './components/MovieCard/MovieCard';
import AboutUs from './components/AboutUs/AboutUs';
function App() {
  return (
    <div className='app'>
      
         <Header/>
         <Routes>
           
           <Route path="/home" element={<Home/>}/> 
           <Route path='/aboutUs' element ={<AboutUs/>}/>
           <Route path="/card" element={<MovieCard />}/>
           <Route path="*" element={<Navigate to ="/home"/>}/>
         </Routes>
        <Footer/>
      
    </div>
   

  );
}

export default App;
