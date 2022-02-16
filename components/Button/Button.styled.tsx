import styled from "@emotion/styled";

const BaseButtonStyled = styled.button(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2, 4),
  fontSize: theme.spacing(2),
  fontWeight: 600,
  letterSpacing: 1.5,
}));

export const PrimaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: theme.black,
  color: theme.text.secondary,
  "&:hover": {
    opacity: 0.8,
  },
}));

export const SecondaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  color: theme.black,
  "&:hover": {
    backgroundColor: theme.primary.dark,
  },
}));
