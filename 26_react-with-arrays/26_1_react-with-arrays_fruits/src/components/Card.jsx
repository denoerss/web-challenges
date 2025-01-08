import "./Card.css";

export default function Card({ color, name }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {name}
    </p>
  );
}
