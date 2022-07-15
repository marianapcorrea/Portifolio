import React from "react";
import { useState } from "react";
import styles from "./HeaderNav.module.css";
import HeaderLinkList from "./HeaderLinkList";

const Nav = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    return (
        <div className={styles.menuContainer}>
            <div
                className={styles.btnMobile}
                id={active ? "btnActive" : ""}
                onClick={ToggleMode}
            ></div>
            <div
                className={active ? "menu menuActive" : "menu"}
                onClick={ToggleMode}
            >
                <HeaderLinkList />
            </div>
        </div>
    );
};

export default Nav;
