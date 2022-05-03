import { motion } from 'framer-motion';
import React from 'react';
import useDarkMode from 'use-dark-mode';
import './Logo.scss';

const Logo = () => {
  const darkMode = useDarkMode();

  return (
    <motion.svg
      className="logo"
      viewBox="0 0 70 45"
      width="70"
      height="45"
      onClick={darkMode.toggle}
    >
      <motion.rect
        width="10"
        height="45"
        x="5"
        y="0"
        animate={{ x: darkMode.value ? 49 : 0 }}
        transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.6 }}
        initial={false}
      />
      <motion.circle
        cx="42"
        cy="22"
        r="17"
        animate={{ cx: darkMode.value ? 27 : 42 }}
        transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.6 }}
        initial={false}
      />
    </motion.svg>
  );
};

export default Logo;
