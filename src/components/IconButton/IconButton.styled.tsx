import styled from "@emotion/styled";

export const IconButtonStyled = styled.button(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: theme?.spacing(6.5),
  width: theme?.spacing(6.5),
  cursor: "pointer",
  borderRadius: theme.spacing(2),
}));

export const IconButtonPrimaryStyled = styled(IconButtonStyled)(
  ({ theme }) => ({
    background: theme.isDark ? theme.black : theme.white,
    border: `2px solid ${theme.isDark ? theme.primary.main : theme.black}`,
    "&:hover": {
      opacity: 0.9,
    },
  })
);

export const IconButtonSecondaryStyled = styled(IconButtonStyled)(
  ({ theme }) => ({
    background: theme.primary.main,
    border: `none`,
    "&:hover": {
      background: theme.primary.light,
    },
    "& > svg": {
      color: theme.black,
      stroke: theme.black,
    },
  })
);
