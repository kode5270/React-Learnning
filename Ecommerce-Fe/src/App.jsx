import {  Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { CheckoutPage } from './pages/checkoutPage/checkoutPage'
import { OrdersPage } from './pages/OrderPage/OrderPage'
import { TrackingPage } from './pages/TrackingPage/TrackingPAge'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [carts, setCarts] = useState([])
  

    
  useEffect( () => {
    axios.get('/api/cart-items?expand=product')
            .then((response) => {
                setCarts(response.data)
            })
}, [])

  return (
    <Routes>
      <Route index element={<HomePage carts={carts}  />} />
      <Route path='/checkout' element={<CheckoutPage carts={carts} />} />
      <Route path='/orders' element={ <OrdersPage /> } />
      <Route path='/tracking' element={ <TrackingPage />} />


      <Route path='*' element={ <ErrorPage />} />
    </Routes>

    
  )
}

export default App
