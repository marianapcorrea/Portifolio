import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Main = () => {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
};

export default Main;
