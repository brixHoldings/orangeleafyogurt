import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import type { RefObject } from 'react';

const useDimension = (ref: RefObject<HTMLElement>): { height: number; width: number } => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        setDimensions({ height: entry.target.clientHeight, width: entry.target.clientWidth });
      });
    });
    if (ref.current) {
      resizeObserverRef.current.observe(ref.current);
    }
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [ref]);
  return dimensions;
};

export default useDimension;
