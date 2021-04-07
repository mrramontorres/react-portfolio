import React from "react";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Portfolio from "../components/Portfolio";


function PortfolioSet() {
  return (
    <div>
      <Wrapper>
        <Title> Some of my works </Title>
          <Portfolio />
      </Wrapper>
    </div>
  );
}

export default PortfolioSet;
