import styled from "@emotion/styled";
import useDebounce from "hooks/useDebounce";
import useMenu from "hooks/useMenu";
import React, {
  createRef,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import ScrollUtils from "utils/ScrollUtils";

type ScrollContainerProps = {
  elements: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>[];
};

export const ScrollContainerStyled = styled.div(() => ({
  scrollSnapType: "x mandatory"
}));

const ScrollContainer = ({ elements }: ScrollContainerProps) => {
  const menu = useMenu();
  const items = useMemo(
    () =>
      elements.map((element) => ({
        element,
        ref: createRef<HTMLDivElement>(),
      })),
    [elements]
  );

  const handleOnScroll = useDebounce((event) => {
    const containerHeight = window.innerHeight;
    const currentMenu = items.findIndex(({ ref }) => {
      const current = ref.current as HTMLDivElement;
      const isInView = ScrollUtils.isInView(current, containerHeight);
      return isInView;
    });
    menu.set(currentMenu);
  }, 100);

  const moveScrollToPosition = useCallback(
    (index: number) => {
      ScrollUtils.scrollTo(items[index]?.ref?.current as HTMLDivElement);
    },
    [items]
  );

  useImperativeHandle(
    menu.posicionateRef,
    () => {
      return {
        moveScrollToPosition,
      };
    },
    [moveScrollToPosition]
  );

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, [handleOnScroll]);

  return (
    <ScrollContainerStyled>
      {items.map(({ element: Element, ref }, index) => (
        <Element ref={ref} key={`child-container-${index}`} />
      ))}
    </ScrollContainerStyled>
  );
};

export default ScrollContainer;
