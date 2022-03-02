import styled from "@emotion/styled";

export const IconContainer = styled.a(({ theme }) => ({
  border: `2px solid ${theme.isDark ? theme.primary.main : theme.white}`,
  display: "flex",
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    opacity: 0.7,
  },
}));