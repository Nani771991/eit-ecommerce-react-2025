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

        const totalQuantity = cart.reduce( (acc, currentProd) => acc + currentProd.quantity, 0)
        
        return (
            <CartContext.Provider value={{
                cart,
                setQuantity,
                totalQuantity
            }}>
                {children}
            </CartContext.Provider>
    )
}

export default CartProvider