import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        {/* <!-- HTML Meta Tags --> */}
        <title>Department of Information and Technology - JNTUK UCEV </title>
        <meta
          name="description"
          content="Achieve academic excellence by imparting in-depth knowledge to the students, cater to the ever changing industrial demands and societal needs."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://ucevit.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Department of Information and Technology - JNTUK UCEV "
        />
        <meta
          property="og:description"
          content="Achieve academic excellence by imparting in-depth knowledge to the students, cater to the ever changing industrial demands and societal needs."
        />
        <meta
          property="og:image"
          content="https://upload.wikimedia.org/wikipedia/en/0/04/Jntuk-logo.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ucevit.vercel.app" />
        <meta property="twitter:url" content="https://ucevit.vercel.app" />
        <meta
          name="twitter:title"
          content="Department of Information and Technology - JNTUK UCEV "
        />
        <meta
          name="twitter:description"
          content="Achieve academic excellence by imparting in-depth knowledge to the students, cater to the ever changing industrial demands and societal needs."
        />
        <meta
          name="twitter:image"
          content="https://upload.wikimedia.org/wikipedia/en/0/04/Jntuk-logo.png"
        />

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
