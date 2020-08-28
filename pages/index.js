import Head from "next/head";

import HomeScreen from "../containers/Home/Home";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ThatProtest | Cyber Protesting Platform</title>
        <meta
          name="description"
          content="That Protest is an online cyber protesting platform created in covid
          lockdown."
        />
        <meta
          name="google-site-verification"
          content="GMukjUvzX7N_4jFCWt-Hu2lgJ4Xi1aDF5r0TZiciNHc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeScreen />
      </main>
    </div>
  );
}
