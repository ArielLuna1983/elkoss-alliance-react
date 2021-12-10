import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from './Cartwidget/CartWidget';
import { Link } from 'react-router-dom'

const NavbarInit = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="logo"
              src= "/media/Logo.png"
              width="50"
              height="50"
              className="logo d-inline-block align-top"
            />Elkos Alliance</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/prod/laptop">Laptops</Nav.Link>
              <Nav.Link as={Link} to="/category/a">categoria "A"</Nav.Link>
              <Nav.Link as={Link} to="/category/b">Categoria "B"</Nav.Link>
              <NavDropdown title="Productos" className="text-light dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/cpu">Cpu</NavDropdown.Item>
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/ram">Ram</NavDropdown.Item>
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/mb">Motherboard</NavDropdown.Item>
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/ssd">SSD</NavDropdown.Item>
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/gpu">GPU</NavDropdown.Item>
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/psu">Fuentes</NavDropdown.Item>
                <NavDropdown.Item className="bg-dark text-light" as={Link} to="/prod/gabinete">Gabinete</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarInit;