import React, { useEffect, useState } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import headerImg from "../../Img/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cv from '../../CV/CV.pdf';
import banner1 from '../../Img/img/banner1.png';

const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desarrollador Front-End", "Desarrollador Con React"];
  const period = 2000;
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenidos A Mi Portafolio</span>
                  <h1 style={{textAlign: "center"}}>{`Hola! Soy Roberto Cuberos`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrollador Front-End", "Desarrollador Con React"]'><span className="wrap">{text}</span></span></h1>
                  <p>Hola un placer saludarlos soy un apasionado del desarrollo web front-end y pronto del back-end, como desarrollador busco implementar todos mis conocimientos al máximo y estoy dispuesto a obtener nuevos aprendizajes y retos así como ofrecer soluciones prácticas en cada proyecto futuro.</p>
                  <NavLink  href="#connect" className={activeLink === "connect" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("connect")}><button style={{background: "transparent"}}>
                    Conectémonos <ArrowRightCircle size={25} /></button></NavLink> 
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={banner1} alt="Header Img"className='responsive' />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;