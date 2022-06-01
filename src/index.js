import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import RouteProvider from './context/RouteProvider';
import UserProvider from './context/UserProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <BrowserRouter>
<<<<<<< Updated upstream
    <UserProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </UserProvider> 
=======
  <React.StrictMode>
    
      <App />
     
    
  </React.StrictMode>
>>>>>>> Stashed changes
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
>>>>>>> 3a4454ed08a820f2e2bcbf0cffe6ab7c44100546
);