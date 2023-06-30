import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Front-end Skills</h2>
              <p style={{ color: "#ff0336" }}>
                Strong understanding:
                <p style={{ color: "var(--text-color)" }}>
                  HTML5, CSS3, JavaScript, ReactJS, Tailwind CSS, Web API, Git
                </p>
              </p>

              <p style={{ color: "#ff0336" }}>
                Currently improving:
                <p style={{ color: "var(--text-color)" }}>
                  Context API, Next.js, StyledComponents, TypeScript
                </p>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
