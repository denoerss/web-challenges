import { App } from "../components/App/App.js";

export function render() {
  const root = document.querySelector("#root");
  root.append(App());
}
