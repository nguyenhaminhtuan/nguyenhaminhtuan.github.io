import { useEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: process.browser ? window.innerWidth : 0,
    height: process.browser ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (process.browser) {
      const handler = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handler);

      return () => {
        window.removeEventListener('resize', handler);
      };
    }
  }, []);

  return size;
}

export default useWindowSize;
