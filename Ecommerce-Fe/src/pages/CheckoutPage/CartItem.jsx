import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from 'axios';
export function CartItem({ cartItem , loadCartsData }) {
    const [quantityInputText, setQuantityInputText]= useState(false)
    const handleupdateCartItem = async () => {
        setQuantityInputText(true)
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
                    Quantity:  <span className="quantity-label">{quantityInputText ?  <input className="quantity-input" type="text" /> : cartItem.quantity}</span>
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