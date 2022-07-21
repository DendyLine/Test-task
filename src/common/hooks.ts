import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
};

export const useScreen = () => {
  const [screen, setScreen] = useState({
    sm: false,
    md: false,
    lg: false,
    xlg: false,
  });


  const calculateScreen = () => {
    let width = window.innerWidth;

    let sm = false;
    let md = false;
    let lg = false;
    let xlg = false;

    if (width < breakpoints.sm) {
      sm = true;
    } else if ((width > breakpoints.sm) && (width <= breakpoints.md)) {
      md = true;
    } else if ((width > breakpoints.md) && (width <= breakpoints.lg)) {
      lg = true;
    } else if (width >= breakpoints.lg) {
      xlg = true;
    }

    setScreen({sm, md, lg, xlg});
  };

  useEffect(() => {
    calculateScreen();
    window.addEventListener('resize', calculateScreen);

    return () => window.removeEventListener('resize', calculateScreen);
  }, []);

  return screen;
};
