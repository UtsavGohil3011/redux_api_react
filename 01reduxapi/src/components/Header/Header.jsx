import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              🐼ABJU
            </Navbar.Brand>{" "}
            {/* Use Link from react-router-dom */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link to="/" className="nav-link ">
                    Home
                  </Link>{" "}
                  {/* Use Link from react-router-dom */}
                  <Link to="/blogs" className="nav-link ">
                    Blogs
                  </Link>{" "}
                  {/* Use Link from react-router-dom */}
                  <Link to="/contact" className="nav-link ">
                    Contact
                  </Link>{" "}
                  <Link to="/Productlisting" className="nav-link ">
                    Productlisting
                  </Link>
                  <Link to="/Productdetail" className="nav-link ">
                    Productdetail
                  </Link>
                  {/* Use Link from react-router-dom */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
