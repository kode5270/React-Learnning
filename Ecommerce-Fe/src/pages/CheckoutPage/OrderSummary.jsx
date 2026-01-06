import dayjs from 'dayjs'
import { formatMoney } from '../../utils/money';
import { DeliveryOption } from './deliveryOption';
import axios from 'axios';

export function OrderSummary({ carts, deliveryOptions, loadCartsData}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && carts.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });
                const handleupdateCartItem = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`,{
                        quantity : Number(cartItem.quantity += 1),
                        deliveryOptionId :String(cartItem.deliveryOptionId)
                    });
                    await loadCartsData();
                }
                const handleDeleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartItem.productId}`);
                    await loadCartsData();
                };

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartItem.product.name}
                                </div>
                                <div className="product-price">
                                    {formatMoney(cartItem.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <input className="quantity-input" type="text"/> <span className="quantity-label">{cartItem.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary"
                                        onClick={handleupdateCartItem}>
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary"
                                        onClick={handleDeleteCartItem}>
                                        Delete
                                    </span>
                                </div>
                            </div>

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