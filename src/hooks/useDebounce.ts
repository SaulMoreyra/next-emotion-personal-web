import { DependencyList, useCallback, useRef } from "react";

const useDebounce = <T extends any[]>(
  callback = (..._args: T) => {},
  wait = 100,
  dependencies: DependencyList = []
) => {
  const timerRef = useRef<number | NodeJS.Timeout>();

  const debounce = useCallback(
    (...args: T): void => {
      clearTimeout(timerRef.current as number);
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, wait);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callback, wait, ...dependencies]
  );

  return debounce;
};

export default useDebounce;
