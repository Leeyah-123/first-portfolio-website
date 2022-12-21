import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { DiPostgresql } from 'react-icons/di';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiTailwindcss } from 'react-icons/si';

import '../styles/about.css';

function About() {
  return (
    <section id="about">
      <div className="about flex">
        <div className="name-container">
          <h1 className="name">
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <br />
            <span>I</span>
            <span>'</span>
            <span>m</span>
            <span> </span>
            <span className="important letter-name">A</span>
            <span className="letter-name">a</span>
            <span className="letter-name">l</span>
            <span className="letter-name">i</span>
            <span className="letter-name">y</span>
            <span className="letter-name">a</span>
            <span className="letter-name">h</span>
            <span className="letter-name"> </span>
            <span className="important letter-name">J</span>
            <span className="letter-name">u</span>
            <span className="letter-name">n</span>
            <span className="letter-name">a</span>
            <span className="letter-name">i</span>
            <span className="letter-name">d</span>
            <span>,</span>
            <br />
            <span>S</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span> </span>
            <span>E</span>
            <span>n</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
            <span>e</span>
            <span>e</span>
            <span>r</span>
            <span>.</span>
          </h1>
          <p className="subscript">
            Full Stack Web Developer / Software Developer
          </p>
          <div className="bio-container">
            <p className="bio paragraph">
              I'm a detail-oriented, technical and result-driven person with
              hands-on experience in efficient websites and APIs with various
              frameworks and technologies. These applications cut across Mobile,
              Web and Desktop platforms, Frontend or Backend.
              <br />
              I am a problem solver, an independent worker but also an efficient
              team player, and I pay close attention to details.
              <br />I love to listening to good music and in my spare time, I
              enjoy scrolling through Quora, watching anime or movies.
            </p>
          </div>
        </div>
        <div className="images">
          <img
            src="./placeholder.svg"
            className="first-image"
            alt="Aaliyah Junaid"
          />
        </div>
        <div className="icons">
          <FaVuejs />
          <FaReact />
          <DiPostgresql />
          <SiTailwindcss />
          <SiNextdotjs />
          <SiNuxtdotjs />
        </div>
        <p className="hover-text"></p>
        <a href="#projects">
          <BsChevronDoubleDown className="scroll-icon" />
        </a>
      </div>
    </section>
  );
}

export default About;
