import AppRoutes from "./routes/AppRoutes"
import CartProvider from "./context/CartProvider"


function App() {
    return (
        <CartProvider>
            <AppRoutes />
        </CartProvider>
    )
}

export default App