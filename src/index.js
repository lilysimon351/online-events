import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RouteProvider from './context/RouteProvider';
import UserProvider from './context/UserProvider';
<<<<<<< HEAD
<<<<<<< HEAD
import LanguageProvider from "./context/LanguageProvider";
=======
>>>>>>> 9beae30245ce5f80c8dae34eef28bd181c2fe80d
=======
import { Provider } from 'react-redux';
import { store } from './store/store';
>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< HEAD
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
=======
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <RouteProvider>
          <App />
        </RouteProvider>
      </UserProvider> 
    </BrowserRouter>
  </Provider>
>>>>>>> 37cab2f6efd4541544440f5609a6c601646aa252
);