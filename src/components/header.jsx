import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = (props) => (
    <header>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">CryptoPet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact className="nav-link" to="/">Главная</NavLink>
                    <NavLink exact className="nav-link" to="/contact">Связь</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;