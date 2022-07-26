import { Block } from '~/common/components';


export const ContactBlock = () => {

  return (
    <Block className='contact-block'>
      <h2>Обсудить проект</h2>
      <p>Расскажите о своих бизнес-целях и мы поможем вам в их достижении</p>
      <form className='centered' action='' method='post'>
        <input type='text' placeholder='Имя' />
        <input type='text' placeholder='Telegram/Viber' />
        <input type='text' placeholder='Email' />
        <div className='centered'>
        <button>Отправить</button>
        </div>
      </form>

    </Block>
  );
};