import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/HeaderNavbar.css";

function App() {
  const [showDropdownRow, setShowDropdownRow] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdownRow(!showDropdownRow);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand href="#">My Site</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handleDropdownClick}>Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Dropdown-Triggered Full Width Section */}
      {showDropdownRow && (
        <Container fluid className="dropdown-full-row">
          <Row>
            <Col md={3}>
              <a href="#" className="dropdown-link">Web Development</a>
            </Col>
            <Col md={3}>
              <a href="#" className="dropdown-link">SEO</a>
            </Col>
            <Col md={3}>
              <a href="#" className="dropdown-link">Marketing</a>
            </Col>
            <Col md={3}>
              <a href="#" className="dropdown-link">Support</a>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
