import React from "react";
import style from "./Home.module.css";

const Home = () => {
    return (
        <section id="home" className="pageContainer">
            <div className={style.homeContent}>
                <p>Olá! Eu sou </p>
                <h1>Lorem Ipsum</h1>
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit
                </p>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button}>Download Currículo</button>
            </div>
        </section>
    );
};

export default Home;
