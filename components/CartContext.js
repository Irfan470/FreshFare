const { createContext, useState } = require("react");

export const CartContext = createContext();
export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    // const [cartOpen, setCartOpen] = useState(false);
    // const toggleCart = () => {
    //     setCartOpen(!cartOpen);
    // };
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    // const removeFromCart = (productId) => {
    //     setCart(cart.filter((product) => product._id !== productId));
    // };
    return (
        <CartContext.Provider
        value={{
            cart, setCart}}
        >
        {children}
        </CartContext.Provider>
    );
    }