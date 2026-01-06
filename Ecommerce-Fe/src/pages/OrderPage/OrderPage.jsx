import './OrderPage.css'
import { Header } from '../../components/Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderHeader } from './OrderHeader'
import  { OrderDetail} from './OrderDetail'


export function OrdersPage({ carts , loadCartsData}) {
    const [orders, setOrders] = useState([])
    window.axios = axios;
    console.log(axios.post('/api/reset'))
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
                            
                            <OrderDetail order={order} loadCartsData={loadCartsData}/>
                            
                        </div>)
                    
                    })}
                </div>
                
            </div>
        </>
    )
}