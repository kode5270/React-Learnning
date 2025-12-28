import './App.css'
import {  Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/Checkout' element={<CheckoutPage />} />
    </Routes>

    
  )
}

export default App
