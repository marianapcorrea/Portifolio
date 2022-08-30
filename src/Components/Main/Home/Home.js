import React from "react";
import style from "./Home.module.css";

const Home = () => {
    return (
        <section id="home" className="pageContainer">
            <div className={style.homeContainer}>
                <div className={style.homeContent}>
                    <p>Olá! Eu sou a</p>
                    <h1>Mariana</h1>
                    <p>desenvolvedora Front-End.</p>
                </div>
                <button className={style.button}>Download Currículo</button>
            </div>
        </section>
    );
};

export default Home;
