import { ReactNode, useContext, useEffect, useRef } from 'react';
import { actions, CarouselContext } from '~/common/components/Carousel';
import { cx } from '~/common/utils';

interface ISlidesProps {
  children: ReactNode[];
  className?: string;
}

let initialized = false;
export const Slides = ({children, className}: ISlidesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {state, dispatch} = useContext(CarouselContext);

  if (state.numOfSlides !== children.length) {
    dispatch(actions.setNumOfSlides(children.length));
  }

  useEffect(() => {
    if (!ref.current || !state.numOfSlides) return;

    const calculateCurrentSlide = () => {
      const widthOfBlankSlide = window.innerWidth > 1024 ? (window.innerWidth - 1070) / 2 : 0;
      const widthOfSlide = (ref.current!.scrollWidth - (widthOfBlankSlide * 2)) / (state.numOfSlides - 1);
      const slide = Math.abs((ref.current!.scrollLeft - widthOfBlankSlide) / widthOfSlide);
      const intSlide = Math.abs(Math.round((ref.current!.scrollLeft - widthOfBlankSlide) / widthOfSlide));
      const scrollToSlide = (slide: number) => {
        ref.current?.scroll({left: (widthOfBlankSlide + widthOfSlide * slide)});
      };

      if (intSlide !== state.currentSlide) {
        dispatch(actions.setCurrentSlide(slide));
      }

      if (slide === state.currentSlide) {
        dispatch(actions.setSliderControls(() => scrollToSlide(slide - 1), () => scrollToSlide(slide + 1)));
      }

      if (!initialized) {
        initialized = true;
        dispatch(actions.setSliderControls(() => scrollToSlide(slide - 1), () => scrollToSlide(slide + 1)));
      }
    };
    calculateCurrentSlide();
    ref.current.addEventListener('scroll', calculateCurrentSlide);

    return () => ref.current?.removeEventListener('scroll', calculateCurrentSlide);
  }, [ref.current, state.numOfSlides, state.currentSlide]);


  return (
    <div className='carousel' aria-label='Carousel'>
      <div ref={ref} className={cx('slides', className)}>
        {children}
      </div>
    </div>
  );
};
