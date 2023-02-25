
import { useNavigate } from "react-router-dom";
import ProductBox from "../components/ProductBox";
import { ProductsData } from "../ProductsData";
import Cart from "./Cart";


export default function ShopAll() {
    
    const navigate = useNavigate();

    const productsList = ProductsData.map((product) => {
        return (
            <div 
                className="all--product"
                onClick={() => navigate(`/${product.id}`)}
            >
                <ProductBox name={product.name} image={product.image} price={product.price} />
            </div>
        )
    })


    return (
        <div className="all--products">
            {productsList}
            <Cart />
        </div>
    )
}