import "@fontsource/poppins";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default appWithTranslation(MyApp);
