import styled from "@emotion/styled";

const MainContainer = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  padding: theme.spacing(0, 5),
  overflow: "hidden",
}));

export default MainContainer;
