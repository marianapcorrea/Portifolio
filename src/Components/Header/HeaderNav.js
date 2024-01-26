import React, { useState } from 'react';
import styles from './HeaderNav.module.css';
import HeaderLinkList from './HeaderLinkList';

function Nav() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <div className={ styles.menuContainer }>
      <button
        aria-label="Botão de alternância móvel"
        className={ styles.btnMobile }
        id={ active ? 'btnActive' : '' }
        onClick={ ToggleMode }
      />
      <button
        aria-label="Botão de alternância móvel"
        className={ active ? `${styles.menu} ${styles.menuActive}` : styles.menu }
        onClick={ ToggleMode }
      >
        <HeaderLinkList />
      </button>
    </div>
  );
}

export default Nav;
