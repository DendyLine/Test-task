import { createContext, useReducer } from 'react';

interface ICarouselProps {
  children: any;
}

export interface ICarouselControls{
  next: () => void;
  prev: () => void;
}

interface ICarouselContext extends ICarouselControls{
  currentSlide: number;
  numOfSlides: number;

}

export const actions = {
  setCurrentSlide: (currentSlide: number) => ({
    type: 'currentSlide',
    payload: {currentSlide},
  } as const),
  setNumOfSlides: (numOfSlides: number) => ({
    type: 'numOfSlides',
    payload: {numOfSlides},
  } as const),
  setSliderControls: (prev: () => void, next: () => void) => ({
    type: 'setSliderControls',
    payload: {prev, next},
  } as const),
};

const defaultValues: ICarouselContext = {
  currentSlide: 0,
  numOfSlides: 0,
  prev: () => null,
  next: () => null,
};

const carouselReducer = (state: ICarouselContext, action: any) => {
  switch (action.type) {
    case 'currentSlide':
    case 'numOfSlides':
    case 'setSliderControls':
      return {...state, ...action.payload};
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
};


export const CarouselContext = createContext<{state: ICarouselContext, dispatch: (a: any) => void}>(undefined as any);

export const Carousel = ({children}: ICarouselProps) => {
  const [state, dispatch] = useReducer(carouselReducer, defaultValues);
  return (
    <CarouselContext.Provider value={{state, dispatch}}>
      {typeof children === 'function'
        ? children({prev: state.prev, next: state.next})
        : children
      }
    </CarouselContext.Provider>
  );
};
