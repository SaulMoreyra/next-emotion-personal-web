"use client";

import { GlobalContainer } from "components/Containers";
import Header from "components/Header";
import SkipLink from "components/SkipLink";
import Sections from "sections";

const HomeContent = () => (
  <GlobalContainer>
    <SkipLink />
    <Header />
    <main id="main-content" tabIndex={-1}>
      <Sections />
    </main>
  </GlobalContainer>
);

export default HomeContent;
