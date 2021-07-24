import React from "react";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "1726b1f6-6363-4e33-86d6-f2a895d2cbd8",
        safari_web_id: "web.onesignal.auto.14e17240-829a-4079-8f1d-24e0d0f74783",
        notifyButton: {
          enable: true,
        },
      });
    });
    return () => {
      window.OneSignal = undefined;
    };
  }, []);
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
        <meta property="og:title" content="Department of Information and Technology - JNTUK UCEV " />
        <meta
          property="og:description"
          content="Achieve academic excellence by imparting in-depth knowledge to the students, cater to the ever changing industrial demands and societal needs."
        />
        <meta property="og:image" content="https://i.imgur.com/Nx6qURe.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ucevit.vercel.app" />
        <meta property="twitter:url" content="https://ucevit.vercel.app" />
        <meta name="twitter:title" content="Department of Information and Technology - JNTUK UCEV " />
        <meta
          name="twitter:description"
          content="Achieve academic excellence by imparting in-depth knowledge to the students, cater to the ever changing industrial demands and societal needs."
        />
        <meta name="twitter:image" content="https://i.imgur.com/Nx6qURe.png" />

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
