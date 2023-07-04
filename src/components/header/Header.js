import "./style.css";
import photo from "../../img/2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Karen</em>
          </strong>
        </h1>
        <div className="header__text">
          <p>
            I am a Front-end React developer specializing in building responsive
            and interactive web applications. Currently seeking an entry-level
            position. Proficient in HTML, CSS, and JavaScript. Use React to
            create dynamic user interfaces that provide great user experiences.
          </p>
        </div>
        <div className="header__photo">
          <img src={photo} alt="profile_photo" />
        </div>
        <a
          href="https://drive.google.com/file/d/1XaxvLRLK0FdW4owFez8YbuJ_XDfohnwC/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
