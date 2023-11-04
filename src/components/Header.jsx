import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import '../styles/header.css';

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isNavOpen ? 'true' : 'false'}
        onClick={() => setNavOpen(!isNavOpen)}
      >
        <svg
          stroke="var(--clr-text-secondary)"
          className="hamburger"
          viewBox="-10 -10 120 120"
          width="50"
          fill="none"
        >
          <path
            className="line"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </button>

      <div
        className="primary-header flex"
        data-nav-opened={isNavOpen ? 'true' : 'false'}
      >
        <a href="/" className="logo-link">
          <div className="logo-container">
            <div className="sub-logo-container">
              <img src="/AJ.svg" alt="logo" className="logo" />
              <span className="name">
                <strong>Aaliyah</strong>
              </span>
            </div>
            <p>Web Developer</p>
          </div>
        </a>

        <nav>
          <ul
            id="primary-navigation"
            data-visible={isNavOpen ? 'true' : 'false'}
            className="primary-navigation flex"
          >
            <li className="active">
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">My Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <ul className="social">
          <li>
            <a href="https://www.linkedin.com/in/aaliyah-junaid-b541aa233">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Leeyah-123">
              <span className="sr-only">Github</span>
              <FaGithub className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/JunaidAaliyah">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lee_yah_260">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="social-logo" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
