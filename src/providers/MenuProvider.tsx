import { ProviderProps } from "interfaces/Provider";
import React, {
  createContext,
  createRef,
  useCallback,
  useRef,
  useState,
} from "react";

const items = ["Inicio", "Sobre mi", "Experiencia", "Contactame"];

export const MenuContext = createContext({
  next: () => {},
  before: () => {},
  items: [] as string[],
  active: 0,
  set: (_position: number) => {},
  move: (_position: number) => {},
  posicionateRef:
    createRef<{ moveScrollToPosition: (index: number) => void }>(),
});

const MenuProvider = ({ children }: ProviderProps) => {
  const [active, setActive] = useState(0);
  const posicionateRef = useRef({
    moveScrollToPosition: (index: number) => {},
  });
  const total = items.length;

  const next = useCallback(() => {
    if (active + 1 > total) return;
    const newPos = active + 1;
    setActive(newPos);
    move(newPos);
  }, [active, total]);

  const before = useCallback(() => {
    if (active - 1 < 0) return;
    const newPos = active - 1;
    setActive(newPos);
    move(newPos);
  }, [active]);

  const set = useCallback((position: number) => {
    setActive(position);
  }, []);

  const move = useCallback(
    (position: number) => {
      posicionateRef.current.moveScrollToPosition(position);
    },
    [posicionateRef]
  );

  return (
    <MenuContext.Provider
      value={{ posicionateRef, active, items, next, before, set, move }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
