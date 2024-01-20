// components/useMediaQueries.ts
import { useEffect, useState } from 'react';

const useMediaQueries = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize('small');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1022) {
        setScreenSize('medium');
      } else if (window.innerWidth >= 1023 && window.innerWidth <= 1278) {
        setScreenSize('large');
      } else {
        setScreenSize('extra-large');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useMediaQueries;