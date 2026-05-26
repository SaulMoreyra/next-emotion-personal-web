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

type DrawerType = {
  theme?: Theme | undefined;
  as?: ElementType | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    open: boolean;
  };

export const BottomSheetStyled = styled.div(({ theme, open }: DrawerType) => ({
  position: "fixed" as const,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1100,
  width: "100%",
  maxHeight: "85vh",
  background: theme?.background,
  borderTopLeftRadius: theme?.spacing(3),
  borderTopRightRadius: theme?.spacing(3),
  transform: open ? "translateY(0)" : "translateY(100%)",
  transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
  overflowX: "hidden" as const,
  overflowY: "auto" as const,
  WebkitOverflowScrolling: "touch" as const,
  boxShadow: "0 -16px 48px rgba(0, 0, 0, 0.18)",
  paddingBottom: "env(safe-area-inset-bottom, 0px)",
}));

export const SheetHandle = styled.div(({ theme }) => ({
  width: "40px",
  height: "4px",
  borderRadius: "999px",
  backgroundColor: theme?.isDark ? theme?.surface.border : theme?.primary.dark,
  margin: `${theme?.spacing(1.5)} auto ${theme?.spacing(1)}`,
  flexShrink: 0,
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
    margin: theme.spacing(1, 0, 2),
    padding: theme?.spacing(0, 4),
  })
);

export const NavLinks = styled.nav(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBottom: theme?.spacing(2),
}));

type BackdropType = DrawerType;
export const BakdropStyled = styled.div(({ theme, open }: BackdropType) => ({
  position: "fixed" as const,
  inset: 0,
  backgroundColor: theme?.fade(theme.black, 0.45),
  zIndex: 1090,
  opacity: open ? 1 : 0,
  ...(open ? { pointerEvents: "auto" as const } : { pointerEvents: "none" as const }),
  transition: "opacity 0.35s ease",
}));
