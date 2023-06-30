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
            I am a Frontend developer with passion of transforming visions into
            pixel-perfect realities through innovative solutions
          </p>
        </div>
        <div className="header__photo">
          <img src={photo} alt="profile_photo" />
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
