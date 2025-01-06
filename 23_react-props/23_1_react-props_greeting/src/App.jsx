import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Alexander" />
      <Greeting name="Andrea" isCoach />
      <Greeting name="Denise" />
      <Greeting name="Gunnar" />
      <Greeting name="Jessica" isCoach />
      <Greeting name="Joshua" />
      <Greeting name="Philipp" />
      <Greeting name="Sergey" />
      <Greeting name="Uschi" />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return <p>{isCoach ? `Hello, Coach ${name}!` : `Hello, ${name}!`}</p>;
}
