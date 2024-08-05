import { useEffect, useRef } from "react";
export default function useNext(value) {
  const valueRef = useRef(value);
  const resolvesRef = useRef([]);

  useEffect(() => {
    if (valueRef.current !== value) {
      for (const resolve of resolvesRef.current) {
        resolve(value);
      }
      resolvesRef.current = [];
      valueRef.current = value;
    }
  }, [value]);
  return () =>
    new Promise((resolve) => {
      resolvesRef.current.push(resolve);
    });
}
