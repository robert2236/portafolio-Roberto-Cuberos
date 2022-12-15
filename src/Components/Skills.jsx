import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../Img/img/color-sharp.png"
import javascript from "../../Img/img/javascript.svg";
import react from "../../Img/img/react.png";
import HTML from "../../Img/img/HTML.png";
import CSS from "../../Img/img/CSS.png";
import Axios from "../../Img/img/Axios.png";
import Redux from "../../Img/img/Redux.png";
import ReactRouter from "../../Img/img/ReactRouter.png";
import git from "../../Img/img/git.png";
import Hub from "../../Img/img/Hub.png";
import php from "../../Img/img/php.png";
import mysql from "../../Img/img/mysql.png";
import postgre from "../../Img/img/postgre.png";
import node from "../../Img/img/node.png";
import bootstrap from "../../Img/img/bootstrap.png";
import express from "../../Img/img/express.png";
import sequelize from "../../Img/img/sequelize.png";
import python from "../../Img/img/python.png";





const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Estas son algunas de las tecnologías en las que he trabajado y he desarrollado cada uno de mis proyectos.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" style={{filter: "drop-shadow(5px 5px 10px cyan)"}}/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={ReactRouter} alt="Image" style={{filter: "drop-shadow(5px 5px 10px red)"}} />
                                <h5>React Router</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" style={{filter: "drop-shadow(5px 5px 10px blue)"}}/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={HTML} alt="Image" style={{filter: "drop-shadow(5px 5px 10px orangered)"}}/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" style={{filter: "drop-shadow(5px 5px 10px fuchsia)"}}/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" style={{filter: "drop-shadow(5px 5px 10px yellow)"}}/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={Axios} alt="Image" style={{filter: "drop-shadow(5px 5px 10px lightblue)"}}/>
                                <h5>Axios</h5>
                            </div>
                            <div className="item">
                                <img src={Redux} alt="Image" style={{filter: "drop-shadow(5px 5px 10px purple)"}}/>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" style={{filter: "drop-shadow(5px 5px 10px orangered)"}}/>
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={Hub} alt="Image" style={{filter: "drop-shadow(5px 5px 10px fuchsia)"}}/>
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" style={{filter: "drop-shadow(5px 5px 10px fuchsia)", marginTop: "40px"}}/>
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" style={{filter: "drop-shadow(5px 5px 10px fuchsia)"}}/>
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={postgre} alt="Image" style={{filter: "drop-shadow(5px 5px 10px fuchsia)"}}/>
                                <h5>Postgres</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" style={{filter: "drop-shadow(5px 5px 10px fuchsia)"}}/>
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" style={{filter: "drop-shadow(5px 5px 10px lawngreen)", marginTop: "40px"}}/>
                                <h5>Express Js</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="Image" style={{filter: "drop-shadow(5px 5px 10px cyan)", marginTop: "40px"}}/>
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" style={{filter: "drop-shadow(5px 5px 10px gold)", marginTop: "40px"}}/>
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;