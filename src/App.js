import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Collection from './components/Collection'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'

const App = () => {
  return (
  <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/collection' element={<Collection/>}></Route>
      <Route path='/product' element={<ProductDetails/>}></Route>
    </Routes>
    
  </>
  )
}

export default App