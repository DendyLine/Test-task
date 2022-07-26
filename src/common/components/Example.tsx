import { PropsWithChildren } from 'react';

interface IPropsExample{
  imgUrl: string
  hover: string
}


export const Example = ({imgUrl,hover}: PropsWithChildren<IPropsExample>) => {


  return (
    <div className='example' style={{backgroundImage: `url(${imgUrl})`}}>
      <div className='example-card'>
        <h2>Онлайн-магазин</h2>
        <p>{hover}</p>
      </div>
    </div>
  );
};