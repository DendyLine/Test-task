import { PropsWithChildren } from 'react';
import { cx } from '~/common/utils';

interface IBlockProps {
  className?: string
}

export const Block =({children, className}: PropsWithChildren<IBlockProps>)=>{
  return(
    <div className='block'>
      <div className={cx('page-width', className)}>
        {children}
      </div>
    </div>
  )
}