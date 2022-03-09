import "@fontsource/poppins";
import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
