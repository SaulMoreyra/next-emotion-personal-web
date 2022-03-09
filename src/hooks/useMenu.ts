import { MenuContext } from "providers/MenuProvider";
import { useContext } from "react";

const useMenu = () => {
  return useContext(MenuContext);
};

export default useMenu;
