import { Logo, Menu, Nav } from '~/common/components';
import { useScreen } from '~/common/hooks';

export const Header = () => {
  const {lg, xlg} = useScreen();
  return (
    <header>
      <div className='page-width'>
        <Logo />
        {lg || xlg ? (
          <div className='nav-button'>
            <Nav />
            {xlg && (<button className='header__button'>Заказать</button>)}
          </div>
        ) : (
          <Menu><Nav axis='vertical' /></Menu>
        )}
      </div>
    </header>
  );
};
