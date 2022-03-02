import styled from "@emotion/styled";

export const Title = styled.h1(({ theme }) => ({
  color: theme.isDark ? theme.white : theme.black,
  fontWeight: 800,
  letterSpacing: 2,
  margin: 0,
  fontSize: theme.spacing(5),
  "@media (max-width: 960px)": {
    fontSize: theme.spacing(3.5),
  },
  "@media (max-width: 576px)": {
    fontSize: theme.spacing(3),
  },
}));

export const Subtitle = styled.h2(({ theme }) => ({
  color: theme.isDark ? theme.ligthGrey : theme.grey,
  fontWeight: 700,
  margin: 0,
  fontSize: theme.spacing(4),
  "@media (max-width: 960px)": {
    fontSize: theme.spacing(3),
  },
  "@media (max-width: 576px)": {
    fontSize: theme.spacing(2.75),
  },
}));

export const Body = styled.p(({ theme }) => ({
  color: theme.isDark ? theme.white : theme.grey,
  fontSize: theme.spacing(3),
  margin: 0,
  "@media (max-width: 960px)": {
    fontSize: theme.spacing(2.5),
  },
  "@media (max-width: 576px)": {
    fontSize: theme.spacing(2),
  },
}));
