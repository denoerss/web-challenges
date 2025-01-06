import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {result}
    </h1>
  );
}
