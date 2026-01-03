import "./HomePage.css"
import { Header } from "../../components/Header/Header"
import ProductsGrid from "./ProductsGrid"
import { useEffect, useState } from "react";
import axios from "axios";


export function HomePage({ carts }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    return (
    
        <>
        <title>Ecommerce-project</title>
        <link rel="icon" type="image/png" href="/images/home-favicon.png" />
        <Header carts={carts}/>
        <div className="home-page">
            <ProductsGrid products={products}/>
        </div>
    </>
    )
}