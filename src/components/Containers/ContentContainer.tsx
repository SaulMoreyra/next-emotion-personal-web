import styled from "@emotion/styled";

const ContentContainer = styled.div(({ theme }) => ({
  minHeight: "100vh",
  maxWidth: theme.breakpoints.xl,
  margin: "0 auto",
}));

export default ContentContainer;
