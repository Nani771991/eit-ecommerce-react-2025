import { useState } from "react"
import { CartContext } from "./CartContext";


function CartProvider({children}) {

    const [cart, setCart] = useState([]); // { prod: {}, quantity: 4 }

    const setQuantity = (product, quantity) => {

        if (!quantity) {
            setCart(
                cart.filter(
                    (itemCart) =>
                        itemCart.prod.id !== product. id 
                )
            )
        } else {
            const foundProduct = cart.find ( ({ prod }) => prod.id === product.id)

            if (!foundProduct) {
                setCart ([
                    ...cart,
                    {
                        prod: product,
                        quantity
                    }    
                ])
            }  else {
                    setCart(
                        cart.map(
                            (itemCart) =>
                                itemCart.prod.id === product. id ? 
                                    {prod: product, quantity}
                                :
                                    itemCart
                        )
                    )
                }
            }
        }
        
        return (
            <CartContext.Provider value={{
                cart,
                setQuantity
            }}>
                {children}
            </CartContext.Provider>
    )
}

export default CartProvider