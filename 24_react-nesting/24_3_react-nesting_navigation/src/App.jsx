import "./styles.css";

import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Link from "./components/Link.jsx";
import Image from "./components/Image.jsx";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        {" "}
        <Link href="#">
          <Image className="round-image" src={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
