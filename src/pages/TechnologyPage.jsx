import React from 'react';
import TechnologyText from "../components/TechnologyText/TechnologyText";
import { Container } from "react-bootstrap";

const TechnologyPage = () => {
  return (
    <div style={{marginTop:'100px', height:'70vh',marginBottom:'50px'}}>
      <Container>
     <TechnologyText />
      </Container>
    </div>
  );
};

export default TechnologyPage;