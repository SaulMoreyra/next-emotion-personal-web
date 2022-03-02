import styled from "@emotion/styled";

export const NavContainerStyled = styled.div(({ theme }) => ({
  position: "fixed",
  width: "100%",
  backgroundColor: theme.background,
  webkitBoxShadow: `0px ${theme.isDark ? "10px" : "0px"} 30px -14px ${
    theme?.black
  }`,
  transition: "0.5s",
  boxShadow: `0px ${theme.isDark ? "10px" : "0px"} 30px -14px ${theme?.black}`,
  zIndex: 1,
}));

export const NavStyled = styled.nav(({ theme }) => ({
  maxWidth: theme.breakpoints.xl,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 4),
  height: theme.spacing(8),
  margin: "0 auto",
}));
