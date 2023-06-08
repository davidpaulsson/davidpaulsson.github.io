import { m, useCycle } from 'framer-motion';
import React from 'react';
import './Header.scss';
import Toggle from './Toggle';

const horunge = (str, opt = 2) => {
  const arr = str.trim().split(' ');
  if (arr.length > 2) {
    const lastWords = arr.slice(-opt).join('\u00A0');
    arr.splice(-opt, opt, lastWords);
    return arr.join(' ');
  }
  return str;
};

const Header = ({ headline, subtitle, html }) => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <header className="header">
      <m.h1
        animate={isOpen ? { opacity: 0.5 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="header__title"
      >
        {headline}
        <br />
        {horunge(subtitle)} <Toggle {...{ isOpen, setIsOpen }} />
      </m.h1>

      <m.div
        className="h2 header__content"
        style={{ overflow: 'hidden' }}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.6 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </header>
  );
};

export default Header;
