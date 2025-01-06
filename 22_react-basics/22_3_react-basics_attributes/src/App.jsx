import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">React Basics</h2>
      <label htmlFor="search" id="label">
        Search:
      </label>
      <input type="text" id="text" />
      <a className="article__link" href="https://react.dev/">
        About React
      </a>
    </article>
  );
}
