import styled from "@emotion/styled";
import { ContainerWithRefProps } from "interfaces/Container";

export const AboutContainer = styled.div(
  ({ theme }: ContainerWithRefProps) => ({
    padding: theme?.spacing(8, 4, 0, 4),
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "30% auto",
    gridTemplateRows: "10% auto",
  })
);

export const TitleContainer = styled.div(({ theme }) => ({
  gridColumn: "1 / span 2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  textAlign: "center",
}));

export const TringlesContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const TextContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 40,
}));

export const IconsContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: 20,
}));
