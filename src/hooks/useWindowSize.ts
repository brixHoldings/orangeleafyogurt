import { useState, useEffect } from 'react';

const useWindowSize = (): { width: number } => {
  const [width, setWidth] = useState<number>(typeof window === 'undefined' ? 0 : window.innerWidth);

  useEffect(() => {
    function handleResize(): void {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { width };
};

export default useWindowSize;
