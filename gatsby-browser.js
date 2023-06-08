import React from 'react';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import './src/styles/reset.scss';
import './src/styles/variables.scss';
import './src/styles/global.scss';
import './src/styles/fonts.scss';

export const shouldUpdateScroll = () => false;

export const wrapRootElement = ({ element }) => (
  <LazyMotion features={domAnimation} strict>
    {element}
  </LazyMotion>
);

export const wrapPageElement = ({ element, props }) => (
  <AnimatePresence mode="wait" {...props}>
    {element}
  </AnimatePresence>
);
