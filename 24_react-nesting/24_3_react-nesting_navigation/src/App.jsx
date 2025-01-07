import "./styles.css";

import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        {" "}
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation>
          <a className="navigation__link" href="#home">
            Home
          </a>
          <a className="navigation__link" href="#about">
            About
          </a>
          <a className="navigation__link" href="#impressum">
            Impressum
          </a>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
