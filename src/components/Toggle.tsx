import React from 'react';
import { root, dot, isPlaying } from './Toggle.module.scss';

const Toggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={[root, !isOpen ? isPlaying : false].filter(Boolean).join(' ')}
      aria-label={isOpen ? 'Read less' : 'Read more'}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={dot} />
      <span className={dot} />
      <span className={dot} />
    </button>
  );
};

export default Toggle;
