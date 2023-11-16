import React, { useEffect, useState } from 'react';
import { MdOutlineOpenInNew } from 'react-icons/md';

import '../styles/projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://portfolio-backend-6gx0.onrender.com/projects'
        );

        let projects = await response.json();
        setProjects(projects);
      } catch (err) {
        console.log('Error', err);
      }
    }
    fetchData();
  }, []);

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
          {projects.length > 0 ? (
            projects.map((project) => {
              return (
                <div className="project" key={project.id}>
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="project-image"
                  />
                  <div className="project-description">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-short-desc">{project.subtitle}</p>
                    <a href={project.githubUrl} className="project-demo-button">
                      <MdOutlineOpenInNew />
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-project">
              <p>No project found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
