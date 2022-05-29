import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RouteProvider from './context/RouteProvider';
import UserProvider from './context/UserProvider';
<<<<<<< HEAD
import LanguageProvider from "./context/LanguageProvider";
=======
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
<<<<<<< HEAD
    <LanguageProvider>
      <RouteProvider>
        <UserProvider>
          <App />
        </UserProvider> 
      </RouteProvider>
    </LanguageProvider>
=======
    <UserProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </UserProvider> 
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
  </BrowserRouter>
);