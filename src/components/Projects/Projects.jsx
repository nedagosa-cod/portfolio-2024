import imgPjA from "../../assets/projects/invitacionDigital.webp";
import imgPjB from "../../assets/projects/digicard.webp";
import imgPjC from "../../assets/projects/store360.webp";
import imgPjD from "../../assets/projects/memocards.webp";
import imgPjE from "../../assets/projects/movieApp.webp";
import imgPjF from "../../assets/projects/cardInvitation.webp";
import imgPjG from "../../assets/projects/weather.webp";
import imgPjH from "../../assets/projects/kanban.webp";
import imgPjI from "../../assets/projects/portfolio.webp";

const Projects = () => {
  return (
    <>
      <div>
        <h2>Projects</h2>
      </div>
      <div className="project-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
        </svg>
        <span>Customer Projects</span>
      </div>
      <section className="grid-gallery">
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">Invitacion Digital</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/liz-card-invitation"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://brayanyliseth.com/"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://brayanyliseth.com/"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjA})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">DigiCard</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/digicard.git"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://www.digicard.life/"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://www.digicard.life/"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjB})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span>Store 360°</span>
              <p>
                Web page focused on training the commercial manager, where it
                simulates conversation environments and immersion of a real work
                environment.
              </p>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/premise-store.git"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://premise-store-360.onrender.com"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://premise-store-360.onrender.com"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjC})` }}
          ></a>
        </div>
      </section>
      <div className="project-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <span>Personal Projects</span>
      </div>
      <section className="grid-gallery">
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">Memo Cards (Juego)</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/cards-pairs.git"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://card-pairs.onrender.com"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://card-pairs.onrender.com"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjD})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">MovieApp (API)</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/movie-vanilla.git"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://nedagosa-cod.github.io/movie-vanilla/"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://nedagosa-cod.github.io/movie-vanilla/"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjE})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span>Personal Kanban</span>
              <p>
                Personal project focused on replicating Trello, but the
                difference is that this project is only frontend, with the
                advantage that you can save your data in browser storage without
                losing your tasks.
              </p>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/Kanban-task-job"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://mykanban-zt4o.onrender.com/"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://mykanban-zt4o.onrender.com/"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjH})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">Web Weather (API)</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/weatherApi.git"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://climasworld.onrender.com"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://climasworld.onrender.com"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjG})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">Digital Invitation</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/demo1-digicards"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://digicard-demo-1.onrender.com/"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://digicard-demo-1.onrender.com/"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjF})` }}
          ></a>
        </div>
        <div className="projects">
          <div className="projects__header">
            <div className="projects__header--left">
              <span className="min">Last Portfolio</span>
            </div>
            <div className="projects__header--right">
              <a
                class="animated-button"
                href="https://github.com/nedagosa-cod/portfolio-2023.git"
                target="_blank"
              >
                <span>GitHub</span>
                <span></span>
              </a>
              <a
                class="animated-button"
                href="https://nestor-gomez.onrender.com/"
                target="_blank"
              >
                <span>Web Side</span>
                <span></span>
              </a>
            </div>
          </div>
          <a
            href="https://nestor-gomez.onrender.com/"
            target="_blank"
            className="card"
            style={{ backgroundImage: `url(${imgPjI})` }}
          ></a>
        </div>
      </section>
    </>
  );
};

export default Projects;
