import { useEffect, useState } from "react";
import { SectionId } from "data/navigation";

export const useActiveSection = (sectionIds: SectionId[]) => {
  const [active, setActive] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return active;
};

export const scrollToSection = (id: SectionId) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 72;
  const top =
    element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: "smooth" });
};
