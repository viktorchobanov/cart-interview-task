import React, { useContext } from 'react';
import { AppContext } from '../Context/CartContext';

const Cart = () => {
    const {
        cart,
        total,
        removeFromCart,
        clearCart
    } = useContext(AppContext);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id} className='cart-row'>
                            {`${item.quantity}x`} - {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>

            <h2>Total Amount is: {total.toFixed(2)} $</h2>
        </div>
    );
};

export default Cart;
