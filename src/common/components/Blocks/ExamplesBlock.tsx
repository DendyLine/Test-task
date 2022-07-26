import { Block } from '~/common/components';

import { Example } from '~/common/components/Example';


export const ExamplesBlock = () => {

  return (
    <Block>
      <h2>Примеры онлайн-магазинов</h2>
      <div className='examples'>
        <Example hover='для оптовых покупок' imgUrl='two-miniature-green-blue-shopping-cart-yellow-background1.png' />
        <Example hover='для парикмахеров' imgUrl='close-up-of-hair-dryer-and-brush1.png' />
        <Example hover='для кондитеров' imgUrl='deva-williamson-ygTzbTHgDnY-unsplash.png' />
        <Example hover='для флористов' imgUrl='baby-s-breath-flower-bottom-purple-backdrop.png' />
        <Example hover='для визажистов' imgUrl='pexels-shiny-diamond-3373739.png' />
        <Example hover='для художников' imgUrl='color-palette-catalogue-scheme-roller1.png' />
      </div>
    </Block>
  );
};