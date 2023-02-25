import React, { createContext, useState } from "react";
import { ProductsData } from "../ProductsData";

export const ShopContext = createContext(null);

const defaultCart = () => {
    let cart = {}
    for (let i = 1; i < ProductsData.length + 1; i++ ) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(defaultCart)
    const [totalCartItems, setTotalCartItems] = useState(0)
    const [totalCartPrice, setTotalCartPrice] = useState(0)

    const addToCart = (itemId) => {
        setCartItems(prevCartItems => ({...prevCartItems, [itemId]: prevCartItems[itemId] + 1}))
        setTotalCartItems(prevTotalCartItems => prevTotalCartItems + 1)
        setTotalCartPrice(prevTotalCartPrice => prevTotalCartPrice + ProductsData[itemId - 1].price)
    }

    const removeFromCart = (itemId) => {
        setCartItems(prevCartItems => ({...prevCartItems, [itemId]: prevCartItems[itemId] - 1}))
        setTotalCartItems(prevTotalCartItems => prevTotalCartItems - 1)
        setTotalCartPrice(prevTotalCartPrice => prevTotalCartPrice - ProductsData[itemId - 1].price)
    }

    const shopContext = { cartItems, addToCart, removeFromCart, totalCartItems, totalCartPrice } 

    return <ShopContext.Provider value={shopContext}>{props.children}</ShopContext.Provider>
}