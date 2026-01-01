import "./HomePage.css"
import { Header } from "../../components/Header/Header"
import CheckMarkIcon from "../../assets/images/icons/checkmark.png"
import { products } from '../../data/products'
import { data } from "react-router"

export function HomePage () {
    fetch('http://localhost:3000/api/products')
        .then((response) => {
            return response.json();
        })
        .then ((data) => console.log(data) )
    
    return (
    <>
        <title>Ecommerce-project</title>
        <link rel="icon" type="image/png" href="/images/home-favicon.png" />
        <Header />
        <div className="home-page">
        <div className="products-grid">
            {products.map((data) => {
                return(
                <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image"
                    src={data.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                {data.name}
                </div>
                
                <div className="product-rating-container">
                <img className="product-rating-stars"
                src={`images/ratings/rating-${data.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                {data.rating.count}
                </div>
                </div>
                
                <div className="product-price">
                {`${(data.priceCents/100).toFixed(2)}$`}
                </div>

                <div className="product-quantity-container">
                <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                    <img src={CheckMarkIcon} />
                    Added
                </div>

                <button className="add-to-cart-button button-primary">
                    Add to Cart
                </button>
                </div>
                )
            })}
            
        </div>
        </div>
    </>
    )
}