import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Basket from './pages/Basket'
import NewArrivals from './pages/NewArrivals'
import Filters from './pages/Filters'
import ProductDetailPage from './pages/ProductDetailPage'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/filters' element={<Filters/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/new-arrivals' element={<NewArrivals/>}/>
        <Route path='/top-selling' element={<NewArrivals/>}/>
        <Route path='/product-detail' element={<ProductDetailPage/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App