import React from "react";
import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={styles.header}>
            <a className={`${styles.link} toHome`} href="/" aria-label="Home">
                marianapcorrea
            </a>
            <Nav className={styles.nav} />
        </header>
    );
};

export default Header;
