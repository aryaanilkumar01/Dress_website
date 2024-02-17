import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
   <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img style={{height:'60px',width:'80px'}} src="https://t4.ftcdn.net/jpg/01/98/68/55/360_F_198685578_B7WYTJba4V4pT9fTHBr6hp7mtfkXEL6F.jpg" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dress World
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Shop</Nav.Link>
                  <Nav.Link href="#action1">Blog</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className='pe-4' variant="outline-success">Search</Button>
                </Form>
                <Nav.Link className='btn rounded ps-5 pe-5'>
                  <i class="fa-solid fa-user mt-2 me-3"></i>
                  <i class="fa-solid fa-heart mt-2 me-3"></i>
                  <i class="fa-solid fa-cart-shopping mt-2 me-3"></i>

                </Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
   </>
  )
}

export default Header