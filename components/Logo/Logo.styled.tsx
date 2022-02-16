import styled from "@emotion/styled";

const BaseText = styled.p(({ theme }) => ({
  fontWeight: 800,
  textTransform: "uppercase",
  margin: 0,
  display: "block",
  fontSize: theme.spacing(2.5),
  letterSpacing: 3,
}));

export const MainText = styled(BaseText)(({ theme }) => ({
  color: theme.text.main,
  marginBottom: -10,
}));

export const SecondaryText = styled(BaseText)(({ theme }) => ({
  color: theme.isDark ? theme.primary.main : theme.primary.dark,
  marginTop: -10,
}));

export const ContainerLogo = styled.div(() => ({
  display: "block",
}));
