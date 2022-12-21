import React from 'react';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaReact, FaVuejs } from 'react-icons/fa';
import {
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
} from 'react-icons/si';

import '../styles/skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="skills flex">
        <div className="text-container">
          <img className="html-open-element" src="./h2.png" alt="<h2>" />
          <h1 className="heading">
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
            <span> </span>
            <span>&</span>
            <span> </span>
            <br />
            <span>E</span>
            <span>x</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span>i</span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>e</span>
          </h1>
          <img
            className="html-closing-element"
            src="./h2-close.png"
            alt="</h2>"
          />
          <img className="html-open-element" src="./p.png" alt="<p>" />
          <p className="subheading">
            I am currently learning{' '}
            <span className="green-text">Software Engineering</span> at{' '}
            <span className="green-text">
              National Institute of Information and Technology
            </span>{' '}
            (NIIT), where I've gained a strong foundation in programming
            languages such as Java and Python. I have completed several personal
            and course projects, and hence developed my skills in both front-end
            and back-end development. I have hands-on experience in Web
            Development using latest technologies and best practices. Here are
            some of the technologies I've been working with recently:
          </p>
          <img
            className="html-closing-element"
            src="./p-close.png"
            alt="</p>"
          />
          <ul className="stack">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>VueJS</li>
            <li>ReactJS</li>
            <li>NuxtJS</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>NestJS</li>
          </ul>
        </div>
        <div className="skill-icons">
          <FaVuejs />
          <FaReact />
          <FaNode />
          <DiPostgresql />
          <SiTailwindcss />
          <SiNextdotjs />
          <SiNuxtdotjs />
          <SiExpress />
          <SiNestjs />
        </div>
      </div>
    </section>
  );
}

export default Skills;
