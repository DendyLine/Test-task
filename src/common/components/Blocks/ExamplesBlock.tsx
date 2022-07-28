import { Block, Carousel, NavigationArrowNext, NavigationArrowPrevious, Slides } from '~/common/components';
import { ICarouselControls } from '~/common/components/Carousel';

import { Example } from '~/common/components/Example';


export const ExamplesBlock = () => {

  return (
    <Block>
      <h2>Примеры онлайн-магазинов</h2>
      <Carousel>
        {({prev, next}: ICarouselControls) => (
          <div className='examples-carousel'>
          <Slides className='examples'>
            <div className='slide'>
              <Example
                hover='для оптовых покупок'
                imgUrl='two-miniature-green-blue-shopping-cart-yellow-background1.png'
              />
              <Example hover='для парикмахеров' imgUrl='close-up-of-hair-dryer-and-brush1.png' />
              <Example hover='для кондитеров' imgUrl='deva-williamson-ygTzbTHgDnY-unsplash.png' />
            </div>
            <div className='slide'>
              <Example hover='для флористов' imgUrl='baby-s-breath-flower-bottom-purple-backdrop.png' />
              <Example hover='для визажистов' imgUrl='pexels-shiny-diamond-3373739.png' />
              <Example hover='для художников' imgUrl='color-palette-catalogue-scheme-roller1.png' />
            </div>

          </Slides>
            <div className='navigation-arrows'>
              <NavigationArrowPrevious onClick={prev} />
              <NavigationArrowNext onClick={next} />
            </div>
          </div>
        )}

      </Carousel>
    </Block>
  );
};