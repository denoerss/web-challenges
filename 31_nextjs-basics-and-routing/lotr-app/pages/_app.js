import GlobalStyle from "../styles";
import TheTwoTowers from "./volumes/the-two-towers";

export default function App({ Component, pageProps, slug }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
