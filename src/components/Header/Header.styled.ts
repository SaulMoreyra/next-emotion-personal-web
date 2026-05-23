import styled from "@emotion/styled";

export const NavContainerStyled = styled.header(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  backgroundColor: theme.isDark
    ? "rgba(10, 10, 10, 0.85)"
    : "rgba(250, 250, 250, 0.85)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderBottom: `1px solid ${theme.surface.border}`,
  zIndex: 100,
}));

export const NavStyled = styled.nav(({ theme }) => ({
  maxWidth: "1100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 3),
  height: "72px",
  margin: "0 auto",
}));
