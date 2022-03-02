import React from "react";
import { Body, Subtitle, Title } from "./Text.styled";

type Props = {
  variant: "title" | "subtitle" | "body";
  children: React.ReactNode | String | JSX.Element | JSX.Element[];
};

const texts = {
  title: Title,
  subtitle: Subtitle,
  body: Body,
};

const Text = ({ variant, children }: Props) => {
  const Component = texts[variant];
  return <Component>{children}</Component>;
};

export default Text;
