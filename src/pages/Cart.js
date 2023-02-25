import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { ShopContext } from "../context/ShopContext";

export default function Cart() {

    const {cartItems, totalCartItems, totalCartPrice } = useContext(ShopContext)

    console.log(cartItems[1])

    const inCart = Object.keys(cartItems).map(item => {
        if (cartItems[item] >= 1) {
            return <CartItem id={item} quantity={cartItems[item]} />
        }
    })


    return (
        <div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <p>YOUR ORDER ({totalCartItems} ITEM{totalCartItems == 1 ? "" : "S"})</p>
                    {inCart}
                </div>
                <div className="cart--checkout">
                    <h4>Total <span>${totalCartPrice}</span></h4>
                    <button onClick={() => alert("support your local bakeries :)")}>CHECKOUT NOW</button>
                </div>
            </div>
            </div>
        </div>
    )
}