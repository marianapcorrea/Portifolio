import React from "react";
import styles from "./HomeSocialMediaList.module.css";

const HomeSocialMediaList = () => {
    return (
        <ul className={styles.socialMedia}>
            <li className={styles.linkedin}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/marianapcorrea/"
                >
                    <img></img>
                </a>
            </li>
            <li className={styles.gitHub}>
                <a target="_blank" rel="noreferrer" href="https://github.com/marianapcorrea">
                    GitHub
                </a>
            </li>
        </ul>
    );
};

export default HomeSocialMediaList;
