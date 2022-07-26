import { memo, PropsWithChildren } from 'react';


interface IPropsStage{
  title: string
}

export const Stage = memo(({children, title}: PropsWithChildren<IPropsStage>) => {

  return (
    <div className='stage slide'>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
});
