import Atom from "components/Atom";
import { AtomHomeContainer, HomeContainer } from "./HomeView.styled";
import Presentation from "components/Presentation";
import React from "react";

const Home = React.forwardRef((_, ref) => {
  return (
    <HomeContainer ref={ref}>
      <Presentation />
      <AtomHomeContainer>
        <Atom />
      </AtomHomeContainer>
    </HomeContainer>
  );
});

Home.displayName = "HomeView";

export default Home;
