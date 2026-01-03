import "./HomePage.css"
import { Header } from "../../components/Header/Header"
import ProductsGrid from "./ProductsGrid"
import { useEffect, useState } from "react";
import axios from "axios";


export function HomePage({ carts ,loadCartsData}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchHomeData = async () => {
            const response = await axios.get('/api/products')

            setProducts(response.data)
        }
        fetchHomeData();
    }, [])

    return (

        <>
            <title>Ecommerce-project</title>
            <link rel="icon" type="image/png" href="/images/home-favicon.png" />
            <Header carts={carts} />
            <div className="home-page">
                <ProductsGrid products={products} loadCartsData={loadCartsData}/>
            </div>
        </>
    )
}