import React, {
  createRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import useDebounce from "hooks/useDebounce";
import ScrollUtils from "utils/ScrollUtils";
import useMenu from "hooks/useMenu";

type ScrollContainerProps = {
  elements: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>[];
};

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

  const moveScrollToPosition = (index: number) => {
    ScrollUtils.scrollTo(items[index]?.ref?.current as HTMLDivElement);
  };

  useImperativeHandle(
    menu.posicionateRef,
    () => {
      return {
        moveScrollToPosition,
      };
    },
    [items, menu.active]
  );

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, [handleOnScroll]);

  return (
    <Fragment>
      {items.map(({ element: Element, ref }, index) => (
        <Element ref={ref} key={`child-container-${index}`} />
      ))}
    </Fragment>
  );
};

export default ScrollContainer;