import styled from "@emotion/styled";

export const NavStyled = styled.nav(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 4),
}));
