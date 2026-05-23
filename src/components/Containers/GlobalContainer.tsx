import styled from "@emotion/styled";

const GlobalContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.background,
  color: theme.text.main,
  minHeight: "100vh",
}));

export default GlobalContainer;
