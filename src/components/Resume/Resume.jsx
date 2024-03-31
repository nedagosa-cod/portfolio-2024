export const Resume = () => {
  return (
    <>
      <div>
        <h2>Resume</h2>
      </div>
      <p>
        I went from being a customer service advisor to leading a frontend
        development team, as a result of wanting to reduce my management times.
        By automating my processes with the web development skills I had at that
        time, today I create web applications that focus on simplifying and
        streamlining processes for various clients through web pages with highly
        logical developments, reducing the time of advisors performing customer
        service tasks for different companies.
      </p>
      <article className="resume">
        <section className="resume__info">
          <div className="resume__info--title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
            </svg>
            <span>Education</span>
          </div>
          <div className="resume__info--card">
            <p>2011-2012</p>
            <h3>Técnico en Sistemas</h3>
            <span>Bucaramanga</span>
          </div>
          <div className="resume__info--card">
            <p>2017 - 2020</p>
            <h3>Tecnologó en gestión empresarial</h3>
            <span>Bogotá</span>
          </div>
          <div className="resume__info--card">
            <p>2023 - 2024</p>
            <h3>Tegnologia en progreamación de software</h3>
            <span>Bogotá/En curso</span>
          </div>
        </section>

        <section className="resume__info">
          <div className="resume__info--title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
            </svg>
            <span>Experience</span>
          </div>
          <div className="resume__info--card">
            <p>2020 - 2024</p>
            <h3>Frontend developer</h3>
            <span>Freelance</span>
          </div>
          <div className="resume__info--card">
            <p>2021 - 2024</p>
            <h3>Design and Frontend developer</h3>
            <span>Atento Colombia</span>
          </div>
        </section>
      </article>
    </>
  );
};
