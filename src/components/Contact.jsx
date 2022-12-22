import React from 'react';

import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="contact flex">
        <div className="text-container">
          <img className="html-open-element" src="./h2.png" alt="<h2>" />
          <h1 className="heading">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span> </span>
            <span>M</span>
            <span>e</span>
          </h1>
          <img
            className="html-closing-element"
            src="./h2-close.png"
            alt="</h2>"
          />
          <img className="html-open-element" src="./p.png" alt="<p>" />
          <p className="subheading">
            <span className="green-text">Freelance jobs</span> appeal to me,
            especially those involving ambitious or sizable tasks. Please
            utilize the form if you have any more requests or inquiries, though.
          </p>
          <img
            className="html-closing-element"
            style={{ marginBottom: '2em' }}
            src="./p-close.png"
            alt="</p>"
          />
          <a
            href="Aaliyah Junaid.pdf"
            className="contact-btn"
            download="Aaliyah Junaid.pdf"
          >
            Download CV
          </a>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Message" cols="30" rows="10" required />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
