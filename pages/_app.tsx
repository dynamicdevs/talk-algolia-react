import type { AppProps } from "next/app";
import { Header, Footer } from "@/components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className="p-4 flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
