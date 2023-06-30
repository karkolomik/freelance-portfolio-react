const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location:</h2>
            <p style={{ color: "#ff0336" }}>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Phone Number:</h2>
            <p>
              <a href="tel:+79051234567">+380 (93) 021-79-68</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email:</h2>
            <p>
              <a href="mailto:karkolom@gmail.com">karkolom@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
