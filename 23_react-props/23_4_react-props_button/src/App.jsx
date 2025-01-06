import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="red" disabled text="Disabled" />
      <Button color="green" text="Active" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{
        color: color,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
