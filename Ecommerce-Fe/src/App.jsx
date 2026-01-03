import {  Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { CheckoutPage }  from './pages/CheckoutPage/CheckoutPage'
import { OrdersPage } from './pages/OrderPage/OrderPage'
import { TrackingPage } from './pages/TrackingPage/TrackingPAge'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [carts, setCarts] = useState([])
  const loadCartsData = async() => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCarts(response.data)
    }
  useEffect( () => {
    
    loadCartsData()
}, [])
  return (
    <Routes>
      <Route index element={<HomePage carts={carts}  loadCartsData={loadCartsData}/>} />
      <Route path='/checkout' element={<CheckoutPage carts={carts} />} />
      <Route path='/orders' element={ <OrdersPage carts={carts} /> } />
      <Route path='/tracking/:orderId/:productId' element={ <TrackingPage carts={carts} />} />
      <Route path='*' element={ <ErrorPage />} />
    </Routes>

    
  )
}

export default App
