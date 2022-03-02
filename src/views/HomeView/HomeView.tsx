import Atom from "components/Atom";
import { AtomHomeContainer, HomeContainer } from "./HomeView.styled";
import Presentation from "components/Presentation";
import React from "react";

const Home = () => {
  return (
    <HomeContainer>
      <Presentation />
      <AtomHomeContainer>
        <Atom />
      </AtomHomeContainer>
    </HomeContainer>
  );
};

export default Home;
