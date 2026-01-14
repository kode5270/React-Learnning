import { it, describe ,vi, expect, beforeEach} from 'vitest';
import { Product } from './Product';
import { render , screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
vi.mock('axios')
describe('Product Component', () => { 
    let product;
    let loadCartsData;
    beforeEach(() => {
        product = {
                keywords: [
                    "socks",
                    "sports",
                    "apparel"
                ],
                id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                rating: {
                    stars: 4.5,
                    count: 87
                },
                priceCents: 1090,
                
            };
        loadCartsData = vi.fn();
    });

    it('display the product detail correctly',  () => {
        render(<Product product={product} loadCartsData={loadCartsData} />)
    
        expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
        ).toBeInTheDocument();
        expect(screen.getByText('$10.90')
        ).toBeInTheDocument();
        expect(screen.getByTestId('product-image')
        ).toHaveAttribute('src',"images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(screen.getByText('87')
        ).toBeInTheDocument();
        expect(screen.getByTestId('product-rating-stars')
        ).toHaveAttribute('src','images/ratings/rating-45.png');
    })
    it('adds a product to cart', async () =>{
        render(<Product product={product} loadCartsData={loadCartsData} />)
        
        const user = userEvent.setup();
        const addToCartButton = screen.getByTestId('add-to-cart-button');
        await user.click(addToCartButton);

        expect(axios.post).toHaveBeenCalledWith('/api/cart-items',{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1
        });
        expect(loadCartsData).toHaveBeenCalled();
    })

})
