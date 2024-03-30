import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Watchlist from './pages/Watchlist';
import CryptoDetails from './components/CryptoDetails';
import HomeHero from './pages/HomeHero';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <HomeHero/>,
        
      },
      {
        path: "/crypto",
        element: <Crypto/>,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails/>
          }
        ]
      },

      {
        path: "/trending",
        element: <Trending/>,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails/>
          }
        ]
      },

      {
        path: "/watchlist",
        element: <Watchlist/>,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails/>
          }
        ]
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
