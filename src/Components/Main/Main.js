import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skils";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <div>
            <Home className="bgDark" />
            <About id="about" className="bgLight" />
            <Projects id="projects" className="bgDark" />
            <Skills id="skills" className="bgLight" />
            <Contact id="contact" className="bgDark" />
        </div>
    );
};

export default Main;
