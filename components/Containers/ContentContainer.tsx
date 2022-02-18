import styled from "@emotion/styled";

const ContentContainer = styled.div(({ theme }) => ({
  minHeight: "100vh",
  margin: "0 auto",
  maxWidth: theme.breakpoints.xxl,
  display: "grid",
  gridTemplateRows: `
    ${theme.spacing(8)} 
    calc(100vh - ${theme.spacing(8)} ) 
    ${theme.spacing(8)}
  `,
}));

export default ContentContainer;
