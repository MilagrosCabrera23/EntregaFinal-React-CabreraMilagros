//importaciones DE REACT
import { useState, useContext } from "react";
//componentes:
import { CartContext } from "../../context/CartContext";
//STYLE.
import "../ItemCount/ItemCount.css"
const ItemCount = () => {
    const [count, setCount] = useState(0);
    const { cartsItems, setCartsItems } = useContext(CartContext);

    const handleAgrProd = () => {
        setCartsItems(cartsItems + 1);
        setCount(count + 1);
    }

    const handleEliminarProd = () => {
        if (cartsItems > 0) {
            setCartsItems(cartsItems - 1);
            setCount(count - 1);
        }

    }

    return (
        <div className="botones">
            <button onClick={handleAgrProd}> + </button>
            <h5>{count}</h5>
            <button onClick={handleEliminarProd}> - </button>
        </div >
    )
}

export default ItemCount;
