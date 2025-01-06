import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <Button
        disabled
        color="red"
        text="Disabled"
        onClick={() => console.log("Button disabled - Click ignored!")}
      />
      <Button
        color="green"
        text="Active"
        onClick={() => console.log("Button clicked!")}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  const handleClick = () => {
    if (disabled) {
      console.log("Button disabled - Click ignored!");
    } else {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <button
        style={{
          pointerEvents: disabled ? "none" : "auto",
          color: color,
          padding: 10,
          margin: 15,
        }}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
