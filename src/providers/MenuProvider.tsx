import { ProviderProps } from "interfaces/Provider";
import { createContext, useCallback, useState } from "react";

const items = ["Inicio", "Sobre mi", "Experiencia", "Contactame"];

export const MenuContext = createContext({
  next: () => {},
  before: () => {},
  items: [] as string[],
  active: 0,
  set: (position: number) => {},
});

const MenuProvider = ({ children }: ProviderProps) => {
  const [active, setActive] = useState(0);
  const total = items.length;

  const next = useCallback(() => {
    if (active + 1 <= total) setActive(active + 1);
  }, [active, total]);

  const before = useCallback(() => {
    if (active - 1 >= 0) setActive(active - 1);
  }, [active]);

  const set = useCallback((position: number) => {
    setActive(position);
  }, []);

  return (
    <MenuContext.Provider value={{ active, items, next, before, set }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
