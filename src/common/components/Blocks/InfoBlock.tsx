import { Block } from '~/common/components';


export const InfoBlock = () => {

  return (
    <Block className='info-block'>
      <h2>Необходимо больше информации?</h2>
      <div className='centered'>
      <img src='public/infoImg.png'/>
      </div>
      <p>Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб-проект.</p>
      <div className='centered'>
        <button>оставить заявку</button>
      </div>
    </Block>
  );
};