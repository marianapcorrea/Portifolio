import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.credits}>
                Desenvolvido por &nbsp;
                <span className={styles.myName}> Mariana P. Corrêa</span>.
                &nbsp;{" "}
                <span className={styles.copyright}>
                    Copyrights Copyrights Copyrights
                </span>
            </p>

            <div className={styles.repo}>
                <p>
                    Veja o código desse site no <a href="/"> GitHub</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
