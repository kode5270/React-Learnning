import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function DeliveryOption({ deliveryOption, cartItem, loadCartsData }) {
    const handleUpdateDeliveryOption = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`,{
            deliveryOptionId : deliveryOption.id,
        })
        await loadCartsData();
    }
    return (
        <div 
            className="delivery-option"
            onClick={handleUpdateDeliveryOption}>
            <input type="radio"
                name={`delivery-option-${cartItem.productId}`}
                checked ={cartItem.deliveryOptionId  === deliveryOption.id}
                onChange={() =>{}}
                className="delivery-option-input"
                />
            <div>
                <div className="delivery-option-date">
                    {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                </div>

                <div className="delivery-option-price">
                    {deliveryOption.priceCents == 0 ? 'Free Shipping' : `${formatMoney(deliveryOption.priceCents)} - Shipping`}
                </div>
            </div>
        </div>
    )
}