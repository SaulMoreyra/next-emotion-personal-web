import styled from "@emotion/styled";
import { ContainerWithRefProps } from "interfaces/Container";

export const AboutContainer = styled.div(
  ({ theme }: ContainerWithRefProps) => ({
    padding: theme?.spacing(8, 4, 0, 4),
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "30% auto",
    gridTemplateRows: "10% auto",
    position: "relative",
    overflow: "hidden",
  })
);

export const TitleContainer = styled.div(() => ({
  gridColumn: "1 / span 2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  textAlign: "center",
}));

export const TringlesContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  "@media (max-width: 960px)": {
    position: "absolute",
    opacity: 0.2,
    transform: "rotate(120deg)",
    right: -150,
    top: 0,
    overflow: "hidden",
  },
}));

export const TextContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 40,
  "@media (max-width: 960px)": {
    gridColumn: "1 / span 2",
  },
}));

export const IconsContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  gap: 20,
}));
