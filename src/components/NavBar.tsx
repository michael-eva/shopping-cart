import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function NavBar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (<Button
                    onClick={openCart}
                    style={{ position: 'relative' }}
                    className="rounded-circle">
                    <AiOutlineShoppingCart />
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: 'white', width: '1.2rem', height: '1.2rem', position: 'absolute', bottom: 0,
                            right: 0, transform: "translate(25%, 25%)"
                        }}
                    >
                        {cartQuantity}
                    </div>
                </Button>)}
            </Container>
        </NavbarBs>
    )
}
