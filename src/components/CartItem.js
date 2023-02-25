import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductsData } from "../ProductsData";

export default function CartItem(props) {

    const displayItem = ProductsData[props.id - 1]
    const itemTotalPrice = displayItem.price * props.quantity
    const { addToCart, removeFromCart } = useContext(ShopContext)

    return (
        <div className="item--container">
            <div>
                <img src={`images/${displayItem.image}.jpg`} alt />
            </div>
            <div>
                <p>{displayItem.name}</p>
                <p>${itemTotalPrice}</p>
                <div className="item--quantity">
                    <button onClick={() => removeFromCart(props.id)}>-</button>
                    <p>{props.quantity}</p>
                    <button onClick={() => addToCart(props.id)}>+</button>
                </div>
            </div>

        </div>
    )
}