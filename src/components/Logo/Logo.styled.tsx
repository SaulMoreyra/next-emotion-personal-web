import styled from "@emotion/styled";

const BaseText = styled.p(({ theme }) => ({
  fontWeight: 900,
  textTransform: "uppercase",
  margin: 0,
  display: "block",
  fontSize: theme.spacing(2.5),
  letterSpacing: 2,
}));

export const MainText = styled(BaseText)(({ theme }) => ({
  color: theme.text.main,
  marginBottom: -5,
}));

export const SecondaryText = styled(BaseText)(({ theme }) => ({
  color: theme.isDark ? theme.primary.main : theme.primary.darker,
  marginTop: -5,
}));

export const ContainerLogo = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));
