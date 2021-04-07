import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://mrramontorres.github.io/portfolio/Assets/Images/Index/image-self.JPG">
        <h1>ramon torres</h1>
        <h2>Passionate about media, entertainment, storytelling, and now technology.
 </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About me...</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              he / him / his - I'm a first-gen Mexican American, biomedical 
              engineering and economics undergrad who has an affinity for bollywood dance 
              numbers and the LGBT community. My favorite moments in life are when I am 
              reminded of how similar we are as human. I started my professional career in 
              investment banking, but commited to pursue my passion for acting, producing and
              now technology.   
            </p>
            <p>
              Why I believe in storytelling: When the biomass we call the human body receives
               light and sound stimulus what happens? In the ears sound vibrates the eardrum,
               while in our eyes light energy activates photoreceptors called cones and rods. 
               A cascade of biochemical and neurological events follow leading to the creation 
               of thought and emotion via millions of connected neurons in the brain. Put 
               enough of those stimuli together and you've got a great story that inevitably 
               feeds what some call the soul. Tell me that isn't cool.
            </p>
            <p>
              Originally from Southern California, I moved to New York for school and spent over 
              10 years in the concrete jungle before moving back to Los Angeles.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
