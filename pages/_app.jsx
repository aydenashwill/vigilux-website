// pages/_app.jsx
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Microsoft Teams Customer Chat Widget */}
      <Script
        src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js"
        strategy="afterInteractive"
        id="chatbot"
        environmentId="d3ea33e1-d6b8-e6b3-a612-c30d2f7e8602"
        region="unitedstates"
        crossOrigin="anonymous"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
