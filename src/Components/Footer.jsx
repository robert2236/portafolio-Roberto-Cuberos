import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import github from '../../Img/img/github.png'
import linkedin from '../../Img/img/linkedin.png'
import instagram from '../../Img/img/instagram.png'
import Cv from '../../CV/CV.pdf'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {

  const [activeLink, setActiveLink] = useState('Home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}> <img  src="./img/img/logo.png" alt="logo"/></Nav.Link>
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon" style={{marginBottom: "20px"}}>
            <a href="https://www.linkedin.com/in/hector-mauricio-de-gante-ramirez-5193271b5/"><img src={linkedin} alt="Icon" style={{objectFit: "contain", width: "25px"}}/></a>
            <a href="https://github.com/LaserDGR?tab=repositories"><img src={github} alt="Icon" style={{objectFit: "contain", width: "25px"}}/></a>
            <a href="#"><img src={instagram} alt="Icon" style={{objectFit: "contain", width: "25px"}}/></a>
          </div>
        </Col>
        <a href={Cv} download="Cv"><button>Cv</button></a> 
      </Row>
      <p>Todos los Derechos Reservados &copy; Roberto Cuberos 2022</p>
    </Container>
  </footer>
  );
};

export default Footer;