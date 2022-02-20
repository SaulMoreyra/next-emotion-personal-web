import styled from "@emotion/styled";

export const ContainerStyled = styled.div(({ theme }) => ({
  gridColumn: "1 / span 2",
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

export const BaseContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 20,
}));

export const TextContainer = styled(BaseContainer)(({ theme }) => ({
  padding: theme.spacing(0, 4),
}));

export const Greeting = styled.h1(({ theme }) => ({
  color: theme.isDark ? theme.white : theme.black,
  fontWeight: 800,
  letterSpacing: 2,
  margin: 0,
  fontSize: theme.spacing(5),
  marginBottom: theme.spacing(-4),
}));

export const Profession = styled.h2(({ theme }) => ({
  color: theme.isDark ? theme.ligthGrey : theme.grey,
  fontWeight: 700,
  margin: 0,
  fontSize: theme.spacing(4),
}));

export const GeneralText = styled.p(({ theme }) => ({
  color: theme.isDark ? theme.white : theme.grey,
  fontSize: theme.spacing(3),
  margin: 0,
  "&:first-of-type": {
    marginTop: theme.spacing(3),
  },
}));

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

export const ButtonContainer = styled.a(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
