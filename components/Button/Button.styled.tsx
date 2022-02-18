import styled from "@emotion/styled";

const BaseButtonStyled = styled.button(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  borderRadius: theme.spacing(4),
  padding: theme.spacing(2, 6),
  fontSize: theme.spacing(2),
  fontWeight: 600,
  letterSpacing: 1.5,
  height: theme.spacing(7),
  color: theme.isDark ? theme.black : theme.white,
}));

export const PrimaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: theme.isDark ? theme.primary.main : theme.black,
  "&:hover": {
    opacity: 0.8,
  },
}));

export const SecondaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: "unset",
  color: theme.isDark ? theme.primary.main : theme.black,
  border: `2px solid ${theme.isDark ? theme.primary.main : theme.black}`,
  "&:hover": {
    opacity: 0.8,
  },
}));
