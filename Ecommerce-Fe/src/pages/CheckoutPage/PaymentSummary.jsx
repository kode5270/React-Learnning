import axios from "axios"
import { formatMoney } from "../../utils/money"
import dayjs from "dayjs"

export function PaymentSummary ( { loadCartsData, paymentSummary , carts, deliveryOptions} ) {
    const handleUpdateOrder = async () =>{
        await axios.post(`/api/orders`,{
            id : String(crypto.randomUUID),
            orderTimeMs : Number(dayjs().valueOf()),
            totalCostCents : Number(paymentSummary.totalCostCents),
            products : carts.map((productOrder) => {
                return  { productId : String(productOrder.product.id),
                          quantity : Number(productOrder.quantity),
                          estimatedDeliveryTimeMs : Number(deliveryOptions.estimatedDeliveryTimeMs) }
            })
        })
        await loadCartsData();
    }

    return (
        <div className="payment-summary">
            {paymentSummary &&
                <>
                    <div className="payment-summary-title">
                        Payment Summary
                    </div>

                    <div className="payment-summary-row">
                        <div>Items ({paymentSummary.totalItems}):</div>
                        <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents)}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
                    </div>

                    <button className="place-order-button button-primary"
                        onClick={handleUpdateOrder}>
                        Place your order
                    </button>
                </>
            }
        </div>
    )
}