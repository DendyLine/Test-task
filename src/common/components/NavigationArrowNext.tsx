import { HTMLAttributes } from 'react';
import { Arrow } from '~/common/components/Arrow';


export const NavigationArrowNext = (props: HTMLAttributes<HTMLButtonElement>) => {

  return (
    <button {...props} className='navigation-arrow navigation-arrow--next'>
      <Arrow />
    </button>
  );
};