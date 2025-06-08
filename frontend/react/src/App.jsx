import React from 'react'
import "./App.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
  import 'bootstrap/dist/css/bootstrap.min.css';


import Track from './pages/Track'
import Rootlayout from './layout/Rootlayout'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Home from './pages/Home'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Rootlayout />}>
       <Route index element={<Home />} />
      <Route path='Track' element={<Track />} />
           <Route path='Home' element={<Home />} />
      <Route path='Product' element={<Product />} />
      <Route path='*' element={<NotFound />} />
</Route>
      ))
      
      return (


      <RouterProvider router={router}>

      </RouterProvider>


      )

}
      export default App
