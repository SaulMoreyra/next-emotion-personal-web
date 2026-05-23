import React from "react";
import { Body, Caption, Display, Subtitle, Title } from "./Text.styled";

type Props = {
  variant: "display" | "title" | "subtitle" | "body" | "caption";
  children: React.ReactNode;
  align?: "center" | "left" | "right";
};

const texts = {
  display: Display,
  title: Title,
  subtitle: Subtitle,
  body: Body,
  caption: Caption,
};

const Text = ({ variant, children, ...props }: Props) => {
  const Component = texts[variant];
  return <Component {...props}>{children}</Component>;
};

export default Text;
