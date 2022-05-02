import React from 'react';
import Logo from './Logo';
import './Top.scss';

const Top = ({ output, children }) => (
  <div className="top">
    <div className="top__logo">{!output && <Logo className="logo" />}</div>
    <div className="top__input">{children}</div>
    <div className="top__cr">
      <div>©</div>
      {new Date().getFullYear()}
    </div>
  </div>
);

export default Top;
