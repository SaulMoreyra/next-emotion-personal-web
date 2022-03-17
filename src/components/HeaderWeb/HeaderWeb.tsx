import ButtonTheme from "components/ButtonTheme";
import Link from "components/Link";
import useMenu from "hooks/useMenu";
import { useCallback } from "react";
import { LinksContainerStyled } from "./HeaderWeb.styled";

const HeaderWeb = () => {
  const menu = useMenu();

  const handleOnClick = useCallback(
    (index: number) => {
      menu.set(index);
      menu.move(index);
    },
    [menu]
  );

  return (
    <LinksContainerStyled>
      {menu.items.map((item, index) => (
        <Link
          key={`menu_mobile-${index}`}
          active={index === menu.active}
          onClick={() => handleOnClick(index)}
        >
          {item}
        </Link>
      ))}
      <ButtonTheme />
    </LinksContainerStyled>
  );
};
export default HeaderWeb;
