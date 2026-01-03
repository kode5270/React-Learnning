
import axios from 'axios'
import { CheckoutHeader } from '../../components/CheckoutHeader/CheckoutHeader'
import './checkoutPage.css'
import { useEffect, useState } from 'react'
import CheckoutGrid from './CheckoutGrid'

export function CheckoutPage({ carts }) {
    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                return setDeliveryOptions(response.data);
            })
        axios.get('/api/payment-summary')
            .then((response) => {
                return setPaymentSummary(response.data);
            })
    }, [])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/png" href="/images/cart-favicon.png" />

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>
                <CheckoutGrid deliveryOptions={deliveryOptions} paymentSummary={paymentSummary} carts={carts}/>
                
            </div>
        </>
    )
}