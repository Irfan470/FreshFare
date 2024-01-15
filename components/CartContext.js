const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext();
export function CartContextProvider({ children }) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cart, setCart] = useState([]);
        useEffect(() => {
            if(cart?.length > 0){
                ls?.setItem("cart", JSON.stringify(cart));
            }
        }, [cart]);
    useEffect(() => {
        if (ls && ls.getItem("cart")) {
            setCart(JSON.parse(ls.getItem("cart")));
        }
    }, []);
 
    const removeFromCart = (productId) => {

       setCart((prev) =>
       {
        const position = prev.indexOf(productId);
        if (position > -1) {
            prev.splice(position, 1);
        }
        return [...prev];
    
    
       
    
    })};



    function addToCart(productId) {
        setCart((prev) => [...prev, productId]);
        
      }
    return (
        <CartContext.Provider
        value={{
            cart, setCart, addToCart, removeFromCart}}
        >
        {children}
        </CartContext.Provider>
    );
    }
