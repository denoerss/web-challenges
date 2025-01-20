import { GlobalStyle } from "../styles";
import "../components/BoxWithClassName/BoxWithClassName.js";
import "../components/BoxWithStyledComponents.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </>
  );
}
