import { useEffect, useState } from 'react';

export const useResize = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    checkResponsive();
    setup();
    return () => cleanup();
  }, []);

  const checkResponsive = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    setDevice({ isMobile, isTablet, isDesktop });
  };

  const setup = () => {
    window.addEventListener('resize', checkResponsive, false);
  };

  const cleanup = () => {
    window.removeEventListener('resize', checkResponsive);
  };

  return device;
};
