import { Block } from '~/common/components';

export const PresentationBlock = () => {
  return (
    <Block className='presentation-block'>
      <div className='centered'>
      <img className='cart' src='public/go to market.147.png' />
      </div>
      <h1>Разработка интернет-магазина с нуля за неделю</h1>
      <p>Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля до пользовательского интерфейса в сжатые сроки с командой Virtual Designers</p>
      <div className='centered'>
        <button>Заказать</button>
      </div>
    </Block>
  );
};