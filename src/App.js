import React from 'react';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Header from "./components/Header/Header"
import MovieCard from './components/MovieCard/MovieCard';
function App() {
  return (
    <div className='app'>
      
         <Header/>
         <Routes>
           <Route path="/home" element={<Home/>}/>
           <Route path="/imdbID" element={<MovieCard />}/>
           <Route path="*" element={<PageNotFound/>}/>
         </Routes>
        <Footer/>
      
    </div>
   

  );
}

export default App;
