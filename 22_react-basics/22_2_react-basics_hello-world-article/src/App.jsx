import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Article</h1>

      <h2>Paragraphs</h2>
      <p>first article paragraph</p>
      <p>second article paragraph</p>
      <p>third article paragraph</p>

      <ol>
        <h2>List Elements</h2>
        <li>first list element</li>
        <li>second list element</li>
        <li>third list element</li>
      </ol>

      <button>Button</button>
    </article>
  );
}
