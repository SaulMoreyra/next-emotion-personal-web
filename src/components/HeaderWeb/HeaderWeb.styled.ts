import styled from "@emotion/styled";

export const LinksContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
}));

export const HeaderControls = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginLeft: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  borderLeft: `1px solid ${theme.surface.border}`,
}));
