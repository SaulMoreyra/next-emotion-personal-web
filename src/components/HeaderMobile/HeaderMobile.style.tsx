import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

export const LinksContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
}));

type SideBarType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    open: boolean;
  };
export const SideBarStyled = styled.div(({ theme, open }: SideBarType) => ({
  zIndex: "1",
  position: "absolute",
  width: "300px",
  height: "100%",
  background: theme?.background,
  right: open ? 0 : "-330px",
  transition: "0.5s",
  padding: theme?.spacing(0, 4),
  overflowX: "hidden",
  WebkitBoxShadow: `-10px 0px 29px -14px ${
    theme?.isDark ? theme.primary.main : theme?.black
  }`,
  boxShadow: ` -10px 0px 29px -14px ${
    theme?.isDark ? theme?.white : theme?.black
  }`,
}));

export const SideContainerItemStyled = styled.div(({ theme }) => ({
  height: theme.spacing(8),
  display: "flex",
  alignContent: "center",
  alignItems: "center",
}));

export const HeaderContainerStyled = styled(SideContainerItemStyled)(
  ({ theme }) => ({
    justifyContent: "space-between",
  })
);
