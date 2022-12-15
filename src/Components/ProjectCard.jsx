import React from 'react';
import { Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const ProjectCard = ({ title, description, imgUrl, URL }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <Nav.Link href={URL}><div className="proj-imgbx" style={{}}>
      <img src={imgUrl} style={{objectFit: "contain", height: "250px"}}/>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div></Nav.Link>
  </Col>
  );
};

export default ProjectCard;