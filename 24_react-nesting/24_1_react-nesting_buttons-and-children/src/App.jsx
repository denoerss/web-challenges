import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button type="button">Button</Button>
      <Button type="submit">Submit</Button>
      <Button type="reset">Reset</Button>
      <Button type="toggle">Toggle</Button>
    </main>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
