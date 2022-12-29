import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { DateProvider } from "../context/dateContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DateProvider>
  );
}
