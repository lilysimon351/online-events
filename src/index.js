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
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <RouteProvider>
          <App />
        </RouteProvider>
      </UserProvider> 
    </BrowserRouter>
  </Provider>
);