import GlobalStyle from "../styles";

export default function App({ Component, pageProps, slug }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
