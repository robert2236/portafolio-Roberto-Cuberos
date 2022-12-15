import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../Img/img/color-sharp2.png";
import Ecommerce from "../../Img/img/Ecommerce.png"
import Pokedex from '../../Img/img/Pokedex2.png'
import UsersCruds from '../../Img/img/UsersCruds.png'
import Weather from '../../Img/img/Weather.png'
import EcommerceJS from '../../Img/img/EcommerceJS.png'
import Box from '../../Img/img/Ram.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  
  const projects = [
    {
      title: "E-commerce",
      description: "Design & Development",
      imgUrl: Ecommerce,
      URL: "https://ecommerce-v2-react.netlify.app/"
    },
    {
      title: "Pokedex",
      description: "Design & Development",
      imgUrl: Pokedex,
      URL: "https://pokemon-v2-3d-animated.netlify.app/"
    },
    {
      title: "Users-Cruds",
      description: "Design & Development",
      imgUrl: UsersCruds,
      URL: "https://app.netlify.com/sites/crud-users-reactjs"
    },
    {
      title: "Weather-App",
      description: "Design & Development",
      imgUrl: Weather,
      URL: "https://weather-app-react20.netlify.app/"
    },
    {
      title: "E-commerce-JSVanilla",
      description: "Design & Development",
      imgUrl: EcommerceJS,
      URL: "https://genuine-kashata-f40244.netlify.app/"
    },
    {
      title: "Box-Glassmorphism",
      description: "Design & Development",
      imgUrl: Box,
      URL: "https://rick-and-morty-v2.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Proyectos</h2>
              <p>Estos son algunos de los proyectos que he hecho a lo largo del tiempo. Para obtener más información, puede tocar las imágenes para obtener más detalles de ellas.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Proyectos Destacados</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Otros Proyectos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Github</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard  
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
  );
};

export default Projects;