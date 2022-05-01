import { ButtonLink } from '../buttons/ButtonLink';
import { IconRow } from './IconRow/IconRow';
import { BUTTONS } from '../constants';

import './Main.scss'

export const Main = () => {
  const url = 'https://www.google.com/'
  const buttonText = 'Watch the video'
  return (
    <>
      <section className="mainSection">
        <h1 className="mainTitle">
          Let’s find
          <br />
          your love
          <span> plants.</span>
        </h1>
        <p className='mainSubTitle'>
          Add some color to your home, give it a little attention, the plants will accompany you quietly
        </p>
      </section>
      <ButtonLink text={buttonText} url={url} type={BUTTONS.LINK} />
      <IconRow />
    </>
  );
};
