import Head from "next/head";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/logo.svg" className="logo" />
        <h1 className="title">ThatProtest</h1>

        <p className="para-1">A Cyber Protesting Platform!</p>

        <p className="para-2">We are launching very soon</p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .para-1 {
          text-align: center;
        }

        .para-1 {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          width: 200px;
          height: 200px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body {
          background-color: #333;
          color: #fff;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
