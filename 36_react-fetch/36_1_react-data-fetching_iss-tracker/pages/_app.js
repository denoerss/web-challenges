import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function fetcher(URL) {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return await response.json();
}

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
      <GlobalStyle />
      <Component {...pageProps} url={URL} />
    </SWRConfig>
  );
}
