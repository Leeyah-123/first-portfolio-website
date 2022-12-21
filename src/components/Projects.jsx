import React from 'react';
import { MdOutlineOpenInNew } from 'react-icons/md';

import '../styles/projects.css';

function Projects() {
  return (
    <section id="projects">
      <div className="projects flex">
        <div className="text-container">
          <img className="html-open-element" src="./h2.png" alt="<h2>" />
          <h1 className="heading">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
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
        <div className="gallery">
          <div className="project">
            <img
              src="./project-placeholder.jpg"
              alt="First project"
              className="project-image"
            />
            <div className="project-description">
              <h3 className="project-title">First Project</h3>
              <p className="project-short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="project-demo-button">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src="./project-placeholder.jpg"
              alt="Second project"
              className="project-image"
            />
            <div className="project-description">
              <h3 className="project-title">Second Project</h3>
              <p className="project-short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="project-demo-button">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src="./project-placeholder.jpg"
              alt="Third project"
              className="project-image"
            />
            <div className="project-description">
              <h3 className="project-title">Third Project</h3>
              <p className="project-short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="project-demo-button">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src="./project-placeholder.jpg"
              alt="Fourth project"
              className="project-image"
            />
            <div className="project-description">
              <h3 className="project-title">Fourth Project</h3>
              <p className="project-short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="project-demo-button">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src="./project-placeholder.jpg"
              alt="Fifth project"
              className="project-image"
            />
            <div className="project-description">
              <h3 className="project-title">Fifth project</h3>
              <p className="project-short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="project-demo-button">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src="./project-placeholder.jpg"
              alt="Sixth project"
              className="project-image"
            />
            <div className="project-description">
              <h3 className="project-title">Sixth project</h3>
              <p className="project-short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="project-demo-button">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
