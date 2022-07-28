import { Logo, SocialMedia, Viber } from '~/common/components';


export const Footer = () => {

  return (
    <footer className='footer'>
      <div className='page-width'>
        <div className='footer__grid-container'>
          <Logo />
          <span className='contacts'>
            <span> <Viber />Валерия: +380505859409</span>
            <span> <Viber />Анна: +380505859409</span>
            <span> <Viber />Валерия: +380505859409</span>
          </span>
          <span className='socialMedia'>
            <SocialMedia />
          </span>
          <span>hr@d-vs.com</span>
        </div>
        <div className='rights'>
          <p>Developers 2018-2021 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};