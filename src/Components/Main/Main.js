import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <main>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
};

export default Main;
