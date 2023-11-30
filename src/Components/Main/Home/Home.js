import React from "react";
import style from "./Home.module.css";
import HomeSocialMediaList from "./HomeSocialMediaList";
// import homeBg from "../../../Assets/Home/home_bg.png";

const Home = () => {
    return (
        <section
            id="home"
            className={style.pageContainer}
            style={{
                // backgroundImage: `url(${homeBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
            }}
        >
            <div className={style.homeContainer}>
                <div className={style.homeContent}>
                    <p>Olá! Eu sou a</p>
                    <h1>Mariana</h1>
                    <p>desenvolvedora Front-End.</p>
                </div>
                <div className={style.socialMedia}>
                    <h3>Redes Sociais</h3>
                    <HomeSocialMediaList />
                </div>
                <button className={style.button}>Download Currículo</button>
            </div>
        </section>
    );
};

export default Home;
