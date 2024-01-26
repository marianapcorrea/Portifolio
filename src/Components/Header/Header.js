import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './Header.module.css';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <header className={ styles.header }>
      <AnchorLink
        id="linkHome"
        href="#home"
        className={ `${styles.linkHome} toHome` }
        aria-label="Home"
      >
        <span className={ styles.tag }>{'<'}</span>
        <span>mariana</span>
        <span className={ styles.dot }>.</span>
        <span>correa</span>
        <span className={ styles.tag }>{'/>' }</span>
      </AnchorLink>
      <HeaderNav className={ styles.nav } />
    </header>
  );
}

export default Header;
