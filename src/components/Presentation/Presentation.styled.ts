import styled from "@emotion/styled";

export const ContainerStyled = styled.div(({ theme }) => ({
  gridColumn: "1 / span 2",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  "@media (max-width: 960px)": {
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export const BaseContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 20,
  "@media (max-width: 960px)": {
    padding: theme.spacing(0, 2),
  },
}));

export const IconsContainer = styled(BaseContainer)(() => ({
  "@media (max-width: 960px)": {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
}));

export const TextContainer = styled(BaseContainer)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  "@media (max-width: 960px)": {
    padding: theme.spacing(2, 2),
  },
  "& > h2:nth-of-type(1)": {
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(4),
    "@media (max-width: 960px)": {
      marginBottom: theme.spacing(1),
    },
  },
}));

export const ButtonContainer = styled.div(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: "flex",
  gap: theme.spacing(3),
  "@media (max-width: 960px)": {
    position: "absolute",
    bottom: 100,
  },
}));
