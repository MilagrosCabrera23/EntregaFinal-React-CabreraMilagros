//IMPORTACIONES DE REACT:
import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {


  const [cartProd,setCartProd] = useState([])
  const [cartsItems, setCartsItems] = useState(0);

  return (
    <CartContext.Provider value={{cartProd,setCartProd, cartsItems, setCartsItems }}>
      {children}
    </CartContext.Provider>
  );
};