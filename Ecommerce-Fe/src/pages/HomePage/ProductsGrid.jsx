import { Product } from "./Product"


function ProductsGrid({ products ,loadCartsData}) {
    
    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} loadCartsData={loadCartsData}/>
                    
                )
            })}

        </div>
    )
} 
export default ProductsGrid;