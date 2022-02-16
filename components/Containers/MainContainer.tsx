import styled from "@emotion/styled";

const GlobalContainer = styled.div(({ theme }) => ({
  minHeight: "100vh",
  margin: "0 auto",
  maxWidth: theme.breakpoints.xl,
}));

export default GlobalContainer;
