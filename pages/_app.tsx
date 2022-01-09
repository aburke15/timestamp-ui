import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
