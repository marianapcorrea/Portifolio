import React from "react";
import { useState } from "react";
import styles from "./Nav.module.css";
import LinkList from "./LinkList";

const Nav = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    return (
        <div className="menuContainer">
            <div
                className={styles.btnMobile}
                id={active ? "btnActive" : ""}
                onClick={ToggleMode}
            ></div>
            <div
                className={active ? "menu menuActive" : "menu"}
                onClick={ToggleMode}
            >
                <LinkList />
            </div>
        </div>
    );
};

export default Nav;
