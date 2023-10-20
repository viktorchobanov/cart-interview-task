import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
    { id: 3, name: 'Product 3', price: 12.49 },
];

const Shop = () => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;