import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Cart from "./Cart"


export default function About() {


    return (
        <div className="about--container">
            <img src="images/miniFlan.jpg" className="about--picture" />
            <div>
                <h2>Who are we?</h2>
                <p>Our Asian bakery, Titicake, specializes in serving traditional Vietnamese desserts such as cakes, flan, jello, and other sweet treats. In addition to our dessert offerings, we also provide all the necessary items for traditional Vietnamese wedding ceremonies. Our menu is diverse, catering to those who appreciate the unique flavors of Vietnamese cuisine. Whether you're looking for a sweet indulgence or need to prepare for a special event, Titicake is sure to offer delicious options.</p>
                <Cart />
            </div>

        </div>
    )
}