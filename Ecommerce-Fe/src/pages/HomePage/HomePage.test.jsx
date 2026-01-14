import { it, describe, vi, beforeEach, expect,  } from 'vitest';
import { HomePage } from './HomePage';
import { MemoryRouter } from 'react-router';
import { render, screen , within } from '@testing-library/react';
import axios from 'axios';
vi.mock('axios')
describe('HomePage Component', () => {
    let loadCartsData;
    beforeEach(() => {
        loadCartsData = vi.fn();

        axios.get.mockImplementation(async (url) => {
            if (url === '/api/products') {
                return {
                    data: [
                        {
                            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                            rating: {
                                stars: 4.5,
                                count: 87
                            },
                            priceCents: 1090,
                            keywords: ["socks", "sports", "apparel"]
                        },
                        {
                            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                            image: "images/products/intermediate-composite-basketball.jpg",
                            name: "Intermediate Size Basketball",
                            rating: {
                                stars: 4,
                                count: 127
                            },
                            priceCents: 2095,
                            keywords: ["sports", "basketballs"]
                        }
                    ],
                };
            }

        })
    })
    it('displays products correctly', async () => {
        render(
            <MemoryRouter>
                <HomePage cart={[]} loadCartsData={loadCartsData} />
            </MemoryRouter>
        );
        
        const productContainers =await screen.findAllByTestId("product-container"); // findAllByTestId for async elements.
        expect(productContainers.length).toBe(2);
        within(productContainers[0]).getByText("Black and Gray Athletic Cotton Socks - 6 Pairs");
        within(productContainers[0]).getByText("$10.90");
        within(productContainers[1]).getByText("Intermediate Size Basketball");
        within(productContainers[1]).getByText("$20.95");
    }); 
});