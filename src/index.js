import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'; // esto se sustituye por el Router 
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom"; //para q sirve esto?
import Home from './screens/Home/Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();