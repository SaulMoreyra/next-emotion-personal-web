import { useState, useEffect } from "react";

const useMediaQuery = (query: string, pixels: number) => {
  const [matches, setMatches] = useState(false);

  const handleMatches = () => {
    const fullQuery = `(${query}: ${pixels}px)`;
    const media = window.matchMedia(fullQuery);
    setMatches(media.matches);
  };

  useEffect(() => {
    if (!window) return;

    window.addEventListener("resize", handleMatches);
    handleMatches();

    return () => window.removeEventListener("resize", handleMatches);
  }, []);
  return matches;
};

export default useMediaQuery;
