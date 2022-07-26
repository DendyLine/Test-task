import { HTMLAttributes } from 'react';
import { Arrow } from '~/common/components/Arrow';


export const NavigationArrowPrevious = (props: HTMLAttributes<HTMLButtonElement>) => {

  return (
    <button {...props} className='navigation-arrow navigation-arrow--previous'>
      <Arrow />
    </button>
  );
};