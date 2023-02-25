import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Layout() {
    return (
        <>
            <nav className="main--nav-desktop">
                <div className="nav--logo">
                    <Link to="/">
                        <img src="images/titicake-logo.png" alt />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/shop">Shop All</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/location">Location</Link>
                    </li>
                </ul>
                <div className="nav--cart">
                    <button className="cart--btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <img src="images/shoppingCart.gif" alt />
                    </button>
                </div>

        
            </nav>
            <nav className="main--nav-mobile">
                <Navbar expand="lg">
                <Container>
                    <div className="nav--logo">
                            <Link to="/">
                                <img src="images/titicake-logo.png" alt />
                            </Link>
                    </div>
                    <div className="nav--cart">
                            <button className="cart--btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <img src="images/shoppingCart.gif" alt />
                            </button>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                            <li>
                                <Link to="/shop">Shop All</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/location">Location</Link>
                            </li>
                        </ul>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </nav>


            <Outlet />
        </>
    )
}