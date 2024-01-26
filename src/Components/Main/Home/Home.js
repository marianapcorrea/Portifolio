import React from 'react';
import style from './Home.module.css';
import SocialMediaList from '../GlobalComponents/SocialMediaList';
import curriculo from '../../../Assets/cv/marianapcorrea_dev_fullstack.pdf';
// import ParticlesComp from './Particle';
// import homeBg from "../../../Assets/Home/home_bg.png";

function Home() {
  return (
    <section
      id="home"
      className={ style.pageContainer }
      style={ {
        // backgroundImage: `url(${homeBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      } }
    >
      <div className={ style.homeContainer }>
        <div className={ style.homeContent }>
          <p className={ style.greetings }>olá! eu sou a</p>
          <p className={ style.name }>Mariana P. Corrêa</p>
          <p className={ style.dev }>desenvolvedora Full Stack.</p>
        </div>
        <section className={ style.contactBtns }>
          <div className={ style.socialMedia }>
            <SocialMediaList />
          </div>
          <a href={ curriculo } download>
            <button className={ style.button }>Download currículo</button>
          </a>
        </section>
      </div>
      <script src="tsparticles.engine.min.js" />
    </section>
  );
}

export default Home;
