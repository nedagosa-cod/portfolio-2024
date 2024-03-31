const Contact = () => {
  return (
    <>
      <div>
        <h2>Contact</h2>
      </div>
      <p>
        I´m open to work, contact me if you want to create a project or work
        with me. <br />
        <strong>Everything you can imagine I can create it!</strong>
      </p>
      <div className="contact">
        <div className="card">
          <div className="image"></div>
          <div className="card-info">
            <span>Nestor Gomez</span>
            <p>Frontend Developer</p>
          </div>
          <a
            href="https://www.linkedin.com/in/néstor-gómez-sanabria-385b8b211"
            target="__blank"
            className="button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
