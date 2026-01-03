import './OrderPage.css'
import { Header } from '../../components/Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderHeader } from './OrderHeader'
import  { OrderDetail} from './OrderDetail'


export function OrdersPage({ carts }) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }
        fetchOrderData();
    }, [])

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/png" href="/images/icons/order.png" />
            <Header carts={carts} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((order) => {
                        
                        return(
                        <div className="order-container" key={order.id}>
                            <OrderHeader order={order}/> 
                            
                            <OrderDetail order={order}/>
                            
                        </div>)
                    
                    })}
                </div>
                
            </div>
        </>
    )
}