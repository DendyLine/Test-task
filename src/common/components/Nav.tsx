import { cx } from '~/common/utils';

const links = [
  {to: '', label: 'Услуги'},
  {to: '', label: 'Портфолио'},
  {to: '', label: 'Этапы'},
  {to: '', label: 'Дизайнеры'},
];

interface INavProps {
  axis?: 'horizontal' | 'vertical';
}

export const Nav = ({axis = 'horizontal'}: INavProps) => {
  return (
    <nav className='nav'>
      <ul className={cx('nav__list', (axis === 'vertical') && 'nav__list--vertical')}>
        {links.map(link => <li key={link.label}><a href={link.to}>{link.label}</a></li>)}
      </ul>
    </nav>
  );
};
