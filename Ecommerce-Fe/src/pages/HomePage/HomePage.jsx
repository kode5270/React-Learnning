import "./HomePage.css"
import { Header } from "../../components/Header/Header"
import ProductsGrid from "./ProductsGrid"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router";


export function HomePage({ carts ,loadCartsData}) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')
    useEffect(() => {
        const fetchHomeData = async () => {
            const response =  search ? await axios.get(`/api/products?search=${search}`) 
                                     : await axios.get(`/api/products`)

            setProducts(response.data)
        }
        fetchHomeData();

    }, [search])

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