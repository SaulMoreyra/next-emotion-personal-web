import React from "react";
import HomeView from "./HomeView";
import AboutView from "./AboutView";
import ScrollContainer from "components/ScrollContainer";

const Views = () => {
  const elements = [HomeView, AboutView, AboutView, AboutView];
  return <ScrollContainer elements={elements} />;
};

export default Views;
