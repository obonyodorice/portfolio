import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations, questions, or
          opportunities.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>0114076750</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:obonyodorice3@gmail.com">
                      obonyodorice3@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <p>
                    <a
                      href="https://github.com/obonyodorice"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/obonyodorice
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="referee-section">
            <h3>Referee</h3>
            <div className="referee-card">
              <div className="referee-name">FANUEL KEHEZE</div>
              <div className="referee-title">
                University Lecturer and Chair of Department of Physics, Pwani
                University
              </div>
              <div className="referee-contacts">
                <div className="referee-contact">
                  📧 <a href="mailto:f.keheze@pu.ac.ke">f.keheze@pu.ac.ke</a>
                </div>
                <div className="referee-contact">📞 0722291913</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <a className="cta-button" href="mailto:obonyodorice3@gmail.com">
            📩 Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
