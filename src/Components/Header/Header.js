import React from 'react';
import { Container, Row,Navbar, Col, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import image1 from "../../Assets/images/homepage/image1.jpg"
import image2 from "../../Assets/images/homepage/image2.jpg"
import image3 from "../../Assets/images/homepage/image3.jpg"
import image4 from "../../Assets/images/homepage/image4.jpg"
import image5 from "../../Assets/images/homepage/image5.jpg"

export default function Header() {
  const slideImages = [
    image1,
    image2,
    image3,
    image4,
    image5
    ];
  return (
    <div>
      <Container fluid="false">
          <Row>
            <Col md={12}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar" fixed="top">
            <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Streetnest
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Download" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#/signIn">Sign In</Nav.Link>
                  <Nav.Link eventKey={2} href="#/signup">
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </Col>
          </Row>
          <Row noGutters="false">
            <Col>
                <div className="slide_div">
                  <Slide easing="ease">
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                      </div>
                    </div>
                  </Slide>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}
