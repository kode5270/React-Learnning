import {  Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { OrdersPage } from './pages/OrderPage/OrderPage'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/Checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={ <OrdersPage /> } />
    </Routes>

    
  )
}

export default App
