import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
          integrity="undefined"
          crossorigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
