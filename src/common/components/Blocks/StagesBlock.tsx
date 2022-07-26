import { Block, NavigationArrowNext, NavigationArrowPrevious, Stage } from '~/common/components';
import { Carousel, ICarouselControls } from '~/common/components/Carousel';
import { Slides } from '~/common/components/Slides';


export const StagesBlock = () => {

  return (
    <Block>

      <Carousel>
        {({prev, next}: ICarouselControls) => (
          <div>
            <Slides className='stages'>
              <Stage title='1. Анализ'>Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.</Stage>
              <Stage title='2. Визуальное решение'>Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный сайт.</Stage>
              <Stage title='3. Техническая реализация'>После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.</Stage>
              <Stage title='4. Наполнение контентом'>Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.</Stage>
              <Stage title='5. Тестирование'>Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.</Stage>
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