import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 banana", color: "yellow" },
    { id: 2, name: "🍎 apple", color: "red" },
    { id: 3, name: "🍊 orange", color: "orange" },
    { id: 4, name: "🍇 grape", color: "purple" },
    { id: 5, name: "🥝 kiwi", color: "green" },
  ];

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}
