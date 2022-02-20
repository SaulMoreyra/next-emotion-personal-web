import styled from "@emotion/styled";

const GlobalContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.background,
  transition: "0.5s",
  margin: theme.spacing(0, 0),
}));

export default GlobalContainer;
