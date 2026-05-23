"use client";

import { useEffect, useRef, useState } from "react";
import { RevealContainer } from "./Reveal.styled";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);

    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <RevealContainer
      ref={ref}
      visible={visible}
      delay={reduceMotion ? 0 : delay}
      $reduceMotion={reduceMotion}
      className={className}
    >
      {children}
    </RevealContainer>
  );
};

export default Reveal;
