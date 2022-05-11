import { useState, useEffect, useCallback } from "react";

const useMediaQuery = (query: string, pixels: number) => {
  const [matches, setMatches] = useState(false);

  const handleMatches = useCallback(() => {
    const fullQuery = `(${query}: ${pixels}px)`;
    const media = window.matchMedia(fullQuery);
    setMatches(media.matches);
  }, [pixels, query]);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("resize", handleMatches);
    handleMatches();

    return () => window.removeEventListener("resize", handleMatches);
  }, [handleMatches]);
  return matches;
};

export default useMediaQuery;
