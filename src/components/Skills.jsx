import React from 'react';

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
            A small gallery of some of my work. If you want to see all but also
            older work, check out{' '}
            <a href="https://github.com/Leeyah-123">My github</a>.
          </p>
          <img
            className="html-closing-element"
            src="./p-close.png"
            alt="</p>"
          />
        </div>
        <div className="gallery flex"></div>
      </div>
    </section>
  );
}

export default Skills;
