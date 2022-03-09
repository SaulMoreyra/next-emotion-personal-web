const isInView = (child: HTMLDivElement, containerHeight: number) => {
  if (!child || !containerHeight) return false;
  const rect = child.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom - containerHeight <= containerHeight;
};

const scrollTo = (element: HTMLDivElement) => {
  if (!element) return;
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export default {
  isInView,
  scrollTo,
};
