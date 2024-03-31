import ImgAtento from "../../assets/client-atento.png";
import ImgPremise from "../../assets/premise_logo_coral-1.webp";

const About = () => {
  return (
    <>
      <div>
        <h2>About</h2>
      </div>
      <p>
        I am Néstor Gómez a person passionate about the development and creation
        of new things, I am motivated every day to be solving logic problems and
        satisfaction to be able to give them solution, I have 3 year of
        experience as a front end developer, I studied graphic design which was
        the first place where I met the software development, I went through
        some difficulties and studied business administration which led me to
        realize that my thing was the development as I always automated
        administrative processes with programs that created through VBA and
        today with HTML, CSS, JavaScript and React, I hope to continue learning
        and give the best of me every day.
      </p>
      <p>
        I work as a developer for the training area at Atento developing web
        pages for different campaigns such as Claro, Liberty, Facebook,
        Colpatria, Telefonica, etc. where processes are automated through the
        web helping the management of advisors.
      </p>
      <span className="subtitle">Skills</span>
      <div className="skills">
        <div className="skill-card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </div>
          <div>
            <span>Web Development</span>
            <p>3 years as a frontend developer with React</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
            </svg>
          </div>
          <div>
            <span>Design</span>
            <p>I studied graphic design from 4 years</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1v36.1l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-20.3-9-41.8-14.7-63.6-16.9v32.2c17.4 2.1 34.4 6.7 50.6 13.9l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 136.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 203.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 232.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 299.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 328.3v33.5c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 400v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V416 345.5 312.8 249.5 216.8 153.5 120.8 64 32C0 14.3 14.3 0 32 0zm80 96A16 16 0 1 0 80 96a16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-32 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
            </svg>
          </div>
          <div>
            <span>English</span>
            <p>I have B1 level in english</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
          </div>
          <div>
            <span>Photography</span>
            <p>Photography is one of my favorite hobbies.</p>
          </div>
        </div>
      </div>
      <section className="clients">
        <h3>Clients</h3>
        <div className="clients__images">
          <figure>
            <img src={ImgAtento} alt="Logo atento" />
          </figure>
          <figure>
            <img src={ImgPremise} alt="Logo Premise" />
          </figure>
        </div>
      </section>
    </>
  );
};
export default About;
