import React from "react";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const Header = () => {
    return (
        <header className={styles.header}>
            <a className={`${styles.link} toHome`} href="/" aria-label="Home">
                marianapcorrea
            </a>
            <HeaderNav className={styles.nav} />
        </header>
    );
};

export default Header;
