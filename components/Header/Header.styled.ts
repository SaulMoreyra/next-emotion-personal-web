import styled from "@emotion/styled";

export const NavStyled = styled.nav(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 4),
}));

export const LinksContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
}));
