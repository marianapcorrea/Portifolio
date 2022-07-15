import React from "react";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
    return (
        <header className={styles.header}>
            <AnchorLink
                id="linkHome"
                href="#home"
                className={`${styles.link} toHome`}
                aria-label="Home"
            >
                marianapcorrea
            </AnchorLink>
            <HeaderNav className={styles.nav} />
        </header>
    );
};

export default Header;
