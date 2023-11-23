import React,{ createContext, useState} from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);


    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id
                ? {...product, quantity: product.quantity + quantity}
                : product
            }));
        } else {
            setCart([...cart, {...item, quantity }]);
        }
    }

    const totalPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.price ,0);
    
    const totalProducts = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0)

    const clear = () => setCart([]);

    const isInCart = (id) => cart.find(product => id === product.id)
    
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    return(

        <CartContext.Provider value={{clear,isInCart,removeItem,addItem,totalPrice,totalProducts,cart}}>

            {children}

        </CartContext.Provider>
    )
}