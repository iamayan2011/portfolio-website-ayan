import React from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import portfolioImg from "../assets/img/portfolio-img.png";
import marvelImg from "../assets/img/introversal-img.png";
import yumCourier from "../assets/img/yum.png";
import weatherRay from "../assets/img/weatherApp.png";

export default function Projects() {
  const WebProjects = [
    {
      title: "Personal Portfolio",
      category: "Web Development",
      imgUrl: portfolioImg,
      url:"https://ayanraza.vercel.app/",
      
    },

    {
      title: "YumCourier: A Food Delivery App",
      category: "Web Development",
      imgUrl: yumCourier,
      url:"#",
    },

    {
      title: "WetheRay: The Weather App",
      category: "Web Development",
      imgUrl:  weatherRay,
      url:"https://iamayan2011.github.io/weatheray.github.io/",
    },
  ];


  const DesignProjects = [
    {
      title: "IntroVersal: All About Marvel",
      category: "Graphic Design",
      description: "An Instagram page which provides Marvel related news updates",
      url:"https://www.instagram.com/intro_versal/",
      imgUrl: marvelImg,
    },

  
  ];
  return (
    <div>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, aliquid animi? Voluptate at rem beatae totam
                nesciunt eius tempore ipsam! Fuga dicta deleniti officia neque
                quaerat accusantium maxime ipsum debitis?
              </p>
              <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        WebProjects.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project}></ProjectCard>
                          )
                        })
                      }

                    </Row>

                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        DesignProjects.map((project, index) => {
                        
                          return (
                            <ProjectCard key={index} {...project}></ProjectCard>
                          )
                        })
                      }

                    </Row>

                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    Lorem Ipsum

                  </Tab.Pane>

                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt=""></img>
      </section>
    </div>
  );
}
