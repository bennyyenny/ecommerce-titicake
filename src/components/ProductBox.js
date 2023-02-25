import React from "react";

export default function ProductBox(props) {
    return (
        <div className="product--box">
            <img src={`images/${props.image}.jpg`} />
            <h5>{props.name}</h5>
            <p>${props.price}</p>
        </div>
    )
}