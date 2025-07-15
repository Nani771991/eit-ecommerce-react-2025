import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Box from '../components/Box'
import { getProducts } from '../utils/api'

function ProductGrid() {
  
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then( data => setProducts(data))
        .catch ( err => console.error(err) )
    }, [])
    
    return (
        <Box className="grid">
            {
                products.map(
                    prod =>
                        <Box key={prod.id} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
                            <Card {...prod} />
                        </Box>
                )
            }
        </Box>
    )
}

export default ProductGrid