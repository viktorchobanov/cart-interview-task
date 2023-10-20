import React, { useContext } from 'react';

import { AppContext } from '../Context/CartContext';

const Product = ({ product }) => {
    const {
        addToCart
    } = useContext(AppContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;