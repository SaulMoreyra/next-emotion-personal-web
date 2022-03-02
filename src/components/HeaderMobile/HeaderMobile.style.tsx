import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

export const LinksContainerStyled = styled.div(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  zIndex: 3,
}));

type SideBarType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    open: boolean;
  };
export const SideBarStyled = styled.div(({ theme, open }: SideBarType) => ({
  zIndex: 4,
  position: "fixed",
  width: "300px",
  height: "100%",
  background: theme?.background,
  right: open ? 0 : "-330px",
  transition: "0.5s",
  overflowX: "hidden",
  webkitBoxShadow: `-10px 0px 29px -14px ${theme?.black}`,
  boxShadow: ` -10px 0px 29px -14px ${theme?.black}`,
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
    padding: theme?.spacing(0, 4),
  })
);

export const LanguageContainer = styled(SideContainerItemStyled)(
  ({ theme }) => ({
    margin: theme.spacing(2, 0),
    padding: theme?.spacing(0, 4),
  })
);
