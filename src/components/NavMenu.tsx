import {FunctionComponent, useEffect, useState} from "react";
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import firebase from "firebase";
import User from '../models/User';
import {auth} from "../config/firebaseConfig";

type NavMenuProps = {
    user: User | null,
}

export const NavMenu : FunctionComponent<NavMenuProps> = ({user}) => {
    const [appUser, setAppUser] = useState(user);
    useEffect(() => {
        setAppUser(user);
    }, [user]);
    const navStyle = {'fontSize':'1.25rem', 'letterSpacing':'.1rem', '--bs-bg-opacity': '.9'}

    const getNavbarSignIn = () => {
        if (appUser != null) {
            return (
                <div></div>
            );
        } else {
            return (
                <Nav.Link onClick={login}>Sign in</Nav.Link>
            );
        }
    };

    const login = () => {
        let provider = new firebase.auth.GoogleAuthProvider();

        auth
            .signInWithPopup(provider)
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                console.error('Error logging in', errorCode, errorMessage);
            });
    };


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
                        {getNavbarSignIn()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}