import React, { useState, useEffect, useReducer } from 'react';

export const AppContext = React.createContext();

// Define the initial cart state
const initialCartState = {
    items: []
}

// Actions that modify the cart
const ADD_TO_CART = 'ADD_TO_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case INCREASE_QUANTITY:
            return {
                ...state,
                items: action.payload
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            }

        case CLEAR_CART:
            return {
                ...state,
                items: []
            }

        default:
            return state;
    }
}

const AppProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [cart, dispatch] = useReducer(cartReducer, initialCartState);

    useEffect(() => {
        setTotal(cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0));
    }, [cart.items]);

    const findItem = (product) => {
        const newQuantity = cart.items.filter((item) => item.id === product.id)

        if (newQuantity.length > 0) {
            return newQuantity[0];
        } else {
            return false;
        }
    }

    const addToCart = (product) => {
        const item = findItem(product);

        // if item is already in cart - increase item quantity
        if (item) {
            const updatedProducts = cart.items.map((i) => {
                if (i.id === item.id) {
                    // Update the quantity for the matching product
                    const newQuantity = item.quantity + 1;
                    return { ...item, quantity: newQuantity };
                }
                return i; // Return unchanged products
            });

            dispatch({ type: INCREASE_QUANTITY, payload: updatedProducts });
        } else {
            dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: 1 } });
        }
    }

    const removeFromCart = (product) => {
        dispatch({ type: REMOVE_FROM_CART, payload: product });
    }

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    }

    return (
        <AppContext.Provider value={{
            cart,
            total,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;