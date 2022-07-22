import { PropsWithChildren, useState } from 'react';
import { Arrow } from '~/common/components/Arrow';
import { cx } from '~/common/utils';

interface IAccordionProps {
  title: string;
}

export const Accordion = ({children, title}: PropsWithChildren<IAccordionProps>) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className={cx('accordion', isOpened ? 'accordion--opened' : 'accordion--closed')}>
      <div className='accordion__heading' onClick={() => setIsOpened(!isOpened)}>
        <div className='accordion__indicator'></div>
        <h3>{title}</h3>
        <Arrow/>
      </div>
      <div className='accordion__content'>
        {isOpened && <p>{children}</p>}
      </div>
    </div>
  );
};