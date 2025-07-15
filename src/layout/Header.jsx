import { NavLink } from "react-router"

import Box from "../components/Box"
import Container from "../components/Container"
import Text from "../components/Text"

import brandImage from "../assets/brand-image.png"

function Header() {
  return (
    <header className="navbar__container">
        <Container className="d-flex space-between">
            <NavLink to="/" className="d-flex align-center">
                <img src={brandImage} alt="" className="mr-4"/>
                <Text as="h1">Juguetería Cósmica</Text>
            </NavLink>
            <Box as="nav" className="navbar__navigation">
                    <ul>
                        <li><NavLink to="/about-us">Sobre Nosotros</NavLink></li>
                        <li><NavLink to="/upload">Alta</NavLink></li>
                        <li><NavLink to="/contact-us">Contactanos</NavLink></li>
                    </ul>
            </Box>
        </Container>
    </header>
  )
}

export default Header