import { useState } from 'react';
import './App.css';
import myImgae from './assets/Krn.jpg';

function App() {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <ul>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#experiences">EXPERIENCES</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* about */}
      <div className="about" id="about">
        <div className="info">
          <h1 id="name">Karin <br/> Naprang</h1>
          <h1 id="position">Software Developer</h1>
          <p>
            As the university registrar, I resolved data and software issues,
            sparking my interest in software development. I eagerly joined
            Generation Thailand's Junior Software Developer Bootcamp, where I
            gained invaluable skills and knowledge. This transformative
            experience solidified my goal of becoming a proficient software
            developer.
          </p>
        </div>

        <div className="my-image">
          <img src={myImgae} alt="Karin image" />
        </div>
      </div>

      {/* projects */}
      <div className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <div className="project-card-img">
            <img src="" alt="" />
          </div>
          <h4>Title</h4>
          <p>contents</p>
          <a>
            <button> Repository </button>
          </a>
        </div>
        <div className="project-card">
          <div className="project-card-img">
            <img src="" alt="" />
          </div>
          <h4>Title</h4>
          <p>contents</p>
          <a>
            <button> Repository </button>
          </a>
        </div>
        <div className="project-card">
          <div className="project-card-img">
            <img src="" alt="" />
          </div>
          <h4>Title</h4>
          <p>contents</p>
          <a>
            <button> Repository </button>
          </a>
        </div>
      </div>

      {/* experiences */}
      <div className="experiences" id="experiences">
        <h2>Experiences</h2>

        <h4>Work</h4>
        <div className="ibsc">
          <img src="#" alt="International Buddhist Studies College" />
          <div className="ibsc-info">
            <h3>Registrar @International Buddhist Studies College </h3>
            <h3>2020 - 2022</h3>
            <ul>
              <li>
                Monitored student information systems and services for the
                district.
              </li>
              <li>
                Administered statistical records for enrollment procedures.
              </li>
              <li>Collected and evaluated registration forms.</li>
              <li>
                Collaborated with coordinators and departments for information
                exchange.
              </li>
              <li>Ensured accurate student records and smooth operations.</li>
              <li>Managed enrollment process and provided timely reports.</li>
              <li>
                Maintained confidentiality and compliance with regulations.
              </li>
            </ul>
          </div>
        </div>

        <h4>Education</h4>
        <div className="generation">
          <img src="#" alt="generation Thailand" />
          <div className="generation-info">
            <h3>Fullstack Developer Learner @Generation Thailand</h3>
            <h3>February - May 2023</h3>
            <ul>
              <li>
                Junior Software Developer (Fullstack Web Developer), 14 Weeks
                (full-time)
              </li>
              <li>
                Technical Skills: HTML, CSS, Javascript, React, Node JS,
                Express, MongoDB, SQL, and GIT & GitHub Source Control.
              </li>
              <li>
                Methodology: Behavior Skills and Mindsets (BSM),
                Problem-Solving, Design Thinking, Agile, Scrum process.
              </li>
            </ul>
          </div>
        </div>
        <div className="mcu">
          <img src="#" alt="Mahachulalomgkornrajavidayalaya University" />
          <div className="mcu-info">
            <h3>
              Bachelor of Arts (Teaching English) <br />
              @Mahachulalomgkornrajavidayalaya University
            </h3>
            <h3>2015 - 2020</h3>
            <ul>
              <li>
                Internship as a teacher at Anurajaprasit School, Nonthaburi, for
                an academic year and taught students in grade 8.
              </li>
              <li>
                Volunteer staff The 13th-15th United Nations Day of Vesak
                Celebrations, Ayutthaya.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* certificates */}
      <div className="certificates">
        <h4>Certificates</h4>
        <div className="slides">Couroucel</div>
      </div>

      {/* footer */}
      <div className="footer" id="contact">
        <h1>Contact</h1>
        <img src="" alt="resume" />
        <img src="" alt="email" />
        <img src="" alt="linkedin" />
        <img src="" alt="github" />
      </div>
    </>
  );
}

export default App;
