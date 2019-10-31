import React from 'react';
import logo from '../../src/images/logo.png';

export default function Header() {

  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src={logo} 
        alt="walter's star logo" />
      </div>

      <div className="header__text-box"> 
        <h1 className="header__title">
          <span className="header__title-left">The world-famous entertainer</span>
          <span className="header__title-right">Walter Cosmopolis!</span>
        </h1>
      </div>
    </header>
  )
}