import styled from "@emotion/styled";

const GlobalContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.background,
  margin: theme.spacing(0, 0),
}));

export default GlobalContainer;
