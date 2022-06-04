import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider from "./context/LanguageProvider";
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <LanguageProvider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
    </LanguageProvider>
  </Provider>
);