import { Logo, SocialMedia, Viber } from '~/common/components';


export const Footer = () => {

  return (
    <div className='footer centered'>
      <Logo />
      <div className='contacts'>
        <Viber /> <p>Валерия</p> <p>+380505859409</p>
        <Viber />  <p>Анна</p> <p>+380505859409</p>
        <Viber />  <p>Валерия</p>  <p>+380505859409</p>
      </div>
      <div className='socialMedia centered'>
      <SocialMedia/>
      </div>
      <p>hr@d-vs.com</p>
      <div className='rights centered'>
      <p>Developers 2018-2021 All rights reserved</p>
      </div>
    </div>
  );
};