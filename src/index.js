import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allrouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      // path:'/about/contact',
      element:<Contact/>
    },
    {
      path:'/blogs',
      element:<BlogList/>
    },
    {
      path:'/blogdetail/:id',
      element:<BlogDetail/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allrouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
