import styled from "@emotion/styled";

export const IconButtonStyled = styled.button(({ theme }) => ({
  background: theme.isDark ? theme.black : theme.white,
  cursor: "pointer",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  border: `2px solid ${theme.isDark ? theme.primary.main : theme.grey}`,
}));
