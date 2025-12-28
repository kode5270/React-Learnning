import {  Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { CheckoutPage } from './pages/checkoutPage/checkoutPage'
import { OrdersPage } from './pages/OrderPage/OrderPage'
import { TrackingPage } from './pages/TrackingPage/TrackingPAge'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={ <OrdersPage /> } />
      <Route path='/tracking' element={ <TrackingPage />} />


      <Route path='*' element={ <ErrorPage />} />
    </Routes>

    
  )
}

export default App
