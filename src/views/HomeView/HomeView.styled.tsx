import styled from "@emotion/styled";
import { ContainerWithRefProps } from "interfaces/Container";

export const AtomHomeContainer = styled.div(({ theme }) => ({
  "@media (max-width: 960px)": {
    display: "none",
  },
  justifyContent: "center",
  display: "flex",
}));

export const HomeContainer = styled.div(({ theme }: ContainerWithRefProps) => ({
  display: "grid",
  minHeight: "100vh",
  gridTemplateColumns: "1fr 1fr 1fr",
  padding: theme.spacing(0, 5),
  overflowX: "hidden",

  "@media (max-width: 960px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    padding: theme.spacing(0, 2),
    position: "relative",
  },
}));
