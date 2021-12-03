import {FunctionComponent} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

type NavMenuProps = {

}

export const NavMenu : FunctionComponent<NavMenuProps> = (props) => {
    const navStyle = {'fontSize':'1.25rem', 'letterSpacing':'.1rem', '--bs-bg-opacity': '.9'}

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" className='shadow-sm border-top border-3' style={navStyle}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Search</Nav.Link>
                        <Nav.Link as={Link} to='add'>Add your Truck</Nav.Link>
                        <Nav.Link as={Link} to=''>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='login'>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}