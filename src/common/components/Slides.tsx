import { ReactNode, useContext, useEffect, useRef } from 'react';
import { actions, CarouselContext } from '~/common/components/Carousel';
import { cx } from '~/common/utils';

interface ISlidesProps {
  children: ReactNode[];
  className?: string
}

export const Slides = ({children, className}: ISlidesProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const {state, dispatch} = useContext(CarouselContext);

    if (state.numOfSlides !== children.length) {
      dispatch(actions.setNumOfSlides(children.length));
    }

    useEffect(() => {
      if (!ref.current) return;

      const calculateCurrentSlide = () => {
        const widthOfSlide = ref.current!.scrollWidth / state.numOfSlides;
        const slide = ref.current!.scrollLeft / widthOfSlide;
        const intSlide = Math.round(ref.current!.scrollLeft / widthOfSlide);
        const scrollToSlide = (slide: number) => {
          ref.current?.scroll({left: (widthOfSlide * slide)});
        };

        if (intSlide !== state.currentSlide) {
          dispatch(actions.setCurrentSlide(slide));
        }

        if (slide === state.currentSlide) {
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
  }
;
