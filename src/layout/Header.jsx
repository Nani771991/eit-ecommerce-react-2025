import Box from "../components/Box"
import Container from "../components/Container"
import Text from "../components/Text"

import brandImage from "../assets/brand-image.png"

function Header() {
  return (
    <header className="navbar__container">
        <Container className="d-flex space-between">
            <Box className="d-flex align-center">
                <img src={brandImage} alt="" className="mr-4"/>
                <Text as="h1">Juguetería Cósmica</Text>
            </Box>
            <Box as="nav" className="navbar__navigation">
                    <ul>
                        <li>Sobre Nosotros</li>
                        <li>Alta</li>
                        <li>Contactanos</li>
                    </ul>
            </Box>
        </Container>
    </header>
  )
}

export default Header