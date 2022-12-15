import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import formContac from "../../Img/img/formContac.png"


const Contact = () => {

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_vl5ifn8','template_vek5lap',event.target,'oWzd39Lwzp0vKiOkO')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={formContac} alt="Contact Us"/>
            }
          </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Contáctame</h2>
              <form onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1" style={{marginBottom: "15px"}}>
                    <input type="text" name='subject' placeholder="Asunto"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1" style={{marginBottom: "15px"}}>
                    <input type="text" name='user_name' placeholder="Nombre y Apellido"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1" style={{marginBottom: "15px"}}>
                    <input type="email" name='user_email' placeholder="Correo Electrónico" />
                  </Col>
                  <Col size={12} sm={6} className="px-1" style={{marginBottom: "15px"}}>
                    <input type="tel" name='user_phone' placeholder="Telefono No."/>
                  </Col>
                  <Col size={12} className="px-1" style={{marginBottom: "15px"}}>
                    <textarea  name="user_message" rows="6" placeholder="Mensaje" ></textarea>
                    <button type="submit"><span>Enviar</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Contact;