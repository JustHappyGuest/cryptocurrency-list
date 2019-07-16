import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
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
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;