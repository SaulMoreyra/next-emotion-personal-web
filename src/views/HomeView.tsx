import Atom from "components/Atom";
import MainContainer from "components/Containers/HomeContainer";
import Presentation from "components/Presentation";
import React from "react";

const Home = () => {
  return (
    <MainContainer>
      <Presentation />
      <Atom />
    </MainContainer>
  );
};

export default Home;
