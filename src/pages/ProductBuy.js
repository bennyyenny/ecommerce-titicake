import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { ProductsData } from "../ProductsData";
import Cart from "./Cart";

export default function ProductBuy() {

    const { id } = useParams();
    const product = ProductsData[id - 1]
    const {addToCart, cartItems} = useContext(ShopContext)

    console.log(cartItems, "hello")

    return (
        <div className="buy--container">
            <div className="buy--image">
                <img src={`images/${product.image}.jpg`} />
            </div>
            <div className="buy--content">
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button className="add-to-cart" onClick={() => addToCart(id)}>Add to Cart</button>
            </div>
            <Cart />
        </div>
    )
}