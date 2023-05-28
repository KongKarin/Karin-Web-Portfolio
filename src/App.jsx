import './App.css';
import myImgae from './assets/Krn.jpg';
// import colmarAcademy from './assets/colmarAcademy.jpg';
// import findMyHat from './assets/findMyHat.jpg';
import exergram from './assets/Exergram.png';
import IBSC from './assets/IBSC.svg';
import Generation from './assets/Generation.svg';
import MCU from './assets/MCU.svg';
import resume from './assets/icons/file.svg';
import mail from './assets/icons/mail.svg';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
// import ControlledCarousel from './component/Carousels.jsx';

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
          <h1 id="name">
            Karin <br /> Naprang
          </h1>
          <h1 id="position">Software Developer</h1>
          <p>
            As the university registrar, I resolved data and software issues,
            sparking my interest in software development. I eagerly joined
            Generation Thailand's Junior Software Developer Bootcamp, where I
            gained invaluable skills and knowledge. This transformative
            experience solidified my goal of becoming a proficient software
            developer.
          </p>
          <a href="#" target="_blank">
            <button id="resume-btn">Resume</button>
          </a>
        </div>

        <div className="my-image">
          <img src={myImgae} alt="Karin image" />
        </div>
      </div>

      {/* projects */}
      <div className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <img src={exergram} alt="Exergram" id="exergram" />
            <div className="project-card-container">
              <div className="project-card-info">
                <h4>EXERGRAM</h4>
                <p>
                  Exercise Tracking Web Application (React, Express, NodeJS,
                  MongoDB)
                </p>
                <div className="project-all-btn">
                  <a href="https://exergram.vercel.app" target="_blank">
                    <button className="card-btn"> Demo </button>
                  </a>
                  <a
                    href="https://github.com/ryosantouchh/exergram-frontend-c1"
                    target="_blank"
                  >
                    <button className="card-btn"> Repository </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experiences */}
      <div className="experiences" id="experiences">
        <h2>Experiences</h2>

        <h4>Work</h4>
        <div className="ibsc">
          <div className="logos">
            <img src={IBSC} alt="International Buddhist Studies College" />
          </div>
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
          <div className="logos">
            <img src={Generation} alt="generation Thailand" />
          </div>
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
          <div className="logos">
            <img src={MCU} alt="Mahachulalomgkornrajavidayalaya University" />
          </div>
          <div className="mcu-info">
            <h3>
              Bachelor of Arts (Teaching English) <br />
              @Mahachulalomgkornrajavidayalaya University
            </h3>
            <h3>2015 - 2020</h3>
            <ul>
              <li>
                Internship as a teacher at Anurajaprasit School, Nonthaburi, for
                an academic year and taught students in grade 8 (2019).
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
      {/* <div className="certificates">
        <h4>Certificates</h4>

        <div className="slides">
          <ControlledCarousel />
        </div>
      </div> */}

      {/* footer */}
      <div className="footer" id="contact">
        <h1>Contact</h1>
        <div className="footer-icon">
          <a href="#" target="_blank">
            <img src={resume} alt="resume" />
          </a>
          <a href="karin.npng@gmail.com" target="_blank">
            <img src={mail} alt="email" />
          </a>
          <a href="www.linkedin.com/in/karin-naprang" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="github.com/KongKarin" target="_blank">
            <img
              src={github}
              alt="github"
              href="github.com/KongKarin"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
