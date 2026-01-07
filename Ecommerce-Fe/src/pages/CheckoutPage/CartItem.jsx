import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from 'axios';
import { DeliveryOption } from "./deliveryOption";
export function CartItem({ cartItem , loadCartsData }) {
    const [quantityInputText, setQuantityInputText]= useState(false)
    const [quantity, setQuantity] = useState(0)
    const handleupdateCartItem = async () => {
        setQuantityInputText(true);
        if(quantityInputText ===true){
        await axios.put(`/api/cart-items/${cartItem.productId}`,{
            quantity : quantity,
        })
    }
        await loadCartsData();

    }
    
    const handleDeleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCartsData();
    };
    return (
        <div className="cart-item-details">
            <div className="product-name">
                {cartItem.product.name}
            </div>
            <div className="product-price">
                {formatMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
                <span>
                    Quantity:  <span className="quantity-label">{
                    quantityInputText === true ?  <input className="quantity-input" 
                                                type="text" 
                                                value={quantity}
                                                onChange={(e) => {
                                                    setQuantity(Number(e.target.value));
                                                }}
                                                onKeyDown={(e) => {
                                                    if(e.key === 'Enter') {
                                                        handleupdateCartItem()
                                                        setQuantityInputText(false)
                                                    }
                                                    else if (e.key === 'Escape'){
                                                        setQuantityInputText(false)
                                                    }
                                                }}/> 
                                          : cartItem.quantity}</span>
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
    )
}