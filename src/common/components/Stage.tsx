import { memo, PropsWithChildren } from 'react';


interface IPropsStage{
  title: string
  imgSrc: string
}

export const Stage = memo(({children, title, imgSrc}: PropsWithChildren<IPropsStage>) => {

  return (
    <div className='stage slide'>
      <div>
      <h3>{title}</h3>
      <p>{children}</p>
      </div>
      <div>
        <img src={imgSrc}/>
      </div>
    </div>
  );
});
