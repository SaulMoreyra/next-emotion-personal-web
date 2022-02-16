import styled from "@emotion/styled";

export const NavStyled = styled.nav(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(3, 5),
}));

export const LinksContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  "& > a:not(last-of-type)": {
    marginRight: theme.spacing(1),
  },
}));
