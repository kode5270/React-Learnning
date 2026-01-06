import dayjs from 'dayjs'
import { DeliveryOption } from './deliveryOption';
import { CartItem } from './CartItem';

export function OrderSummary({ carts, deliveryOptions, loadCartsData}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && carts.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });
                

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <CartItem cartItem={cartItem} loadCartsData={loadCartsData} /> 

                            <div className="delivery-options">
                                <div className="delivery-options-title">
                                    Choose a delivery option:
                                </div>
                                {deliveryOptions.map((deliveryOption) => {
                                    return (
                                        <DeliveryOption key={deliveryOption.id} 
                                                            deliveryOption={deliveryOption} 
                                                            cartItem={cartItem} 
                                                            loadCartsData={loadCartsData}/>
                                        
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                )


            })}
        </div>
    )
}