import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PropsWithChildren, useState } from 'react';

export const Menu = ({children}: PropsWithChildren) => {
  const [isOpened, setIsOpened] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <button onClick={() => setIsOpened(v => !v)} className='menu__button'>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{y: 70, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 70, opacity: 0}}
            transition={{duration: shouldReduceMotion ? 0 : 0.2, ease: 'linear'}}
            className='menu__popup'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
