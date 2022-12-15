import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from '../../Img/img/github.png';
import linkedin from '../../Img/img/linkedin.png';
import instagram from '../../Img/img/instagram.png';
import logo from '../../Img/img/logo.png';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
     if (window.scrollY > 50) {
      setScrolled(true);
     } else{
      setScrolled(false)
     }
    }
    window.addEventListener("scroll", onScroll)
    
    return () => window.removeEventListener("scroll", onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
       <img  src={logo} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Inicio</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Habilidades</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Proyectos</Nav.Link>
        </Nav>
        <span className='navbar-text'>
          <div className='social-icon'>
            <a href="https://www.linkedin.com/in/roberto-jesús-cuberos-4489b51a8/"><img src={linkedin} alt="" style={{objectFit: "contain", width: "25px"}}/></a>
            <a href="https://github.com/robert2236"><img src={github} alt="" style={{objectFit: "contain", width: "25px"}} /></a>
            <a href="https://www.instagram.com/birddev1/"><img src={instagram} alt="" style={{objectFit: "contain", width: "25px"}} /></a>
          </div>
          <Nav.Link href="#connect" className={activeLink === "connect" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("connect")}><button >
            <span>Conectémonos</span>
          </button></Nav.Link>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;