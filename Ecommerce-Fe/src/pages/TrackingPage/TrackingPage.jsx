import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import './TrackingPage.css'
import { Link, useParams } from 'react-router'
import axios from "axios";
import dayjs from "dayjs";
export function TrackingPage({ carts }) {
    const [order, setOrder] = useState([])
    const {orderId, productId} = useParams()
    useEffect(() => {
        const fetchOrderIdData = async () =>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }
        fetchOrderIdData()
    },[orderId])
    if (!order || !order.products) {
    return <p>No order found.</p>;
    }
    const productOrder = order.products.find((item) => productId === item.productId )
    
    const totalDeliveryMs = productOrder.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePasssedMs = dayjs().valueOf() - order.orderTimeMs;
    let percentageOfTimes = (timePasssedMs /totalDeliveryMs)* 100;
    if (percentageOfTimes > 100){
        percentageOfTimes = 100
    }

    return (
        <>
        <Header carts={carts}/>
        <div className="tracking-page">
            <div className="order-tracking">
                <Link className="back-to-orders-link link-primary" href="/orders">
                    View all orders
                </Link>  

                < div className="delivery-date">
                   Arriving On {dayjs(productOrder.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                </div>

                <div className="product-info">
                    {productOrder.product.name}
                </div>

                <div className="product-info">
                    Quantity: {productOrder.quantity}
                </div>

                <img className="product-image" src={productOrder.product.image} />

                <div className="progress-labels-container">
                    <div className={percentageOfTimes < 33 ? 'progress-label current-status' : 'progress-label'}>
                        {percentageOfTimes < 33 ? 'IsPreparing' : 'Preparing'}
                    </div>
                    <div className={percentageOfTimes >= 33 && percentageOfTimes < 100 ? 'progress-label current-status' : 'progress-label'}>
                        {percentageOfTimes >= 33 && percentageOfTimes < 100? 'IsShipping' : 'Shipping'}
                    </div>
                    <div className={percentageOfTimes === 100 ? 'progress-label current-status' : 'progress-label'}>
                        {percentageOfTimes === 100 ? 'IsDelivered' : 'Delivered'}
                    </div>
                </div>

                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width:`${percentageOfTimes > 100 ? 100 : percentageOfTimes}%`}}></div>
                </div>
            </div>
        </div>
        </>
    )
}