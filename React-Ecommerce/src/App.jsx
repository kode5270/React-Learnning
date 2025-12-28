import './App.css'
import {  Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { Checkout } from './pages/CheckoutPage/CheckoutPage'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/Checkout' element={<Checkout />} />
    </Routes>

    
  )
}

export default App
