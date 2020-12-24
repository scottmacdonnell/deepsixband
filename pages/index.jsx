import Head from 'next/head'

export default function Index() {
  return(
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario."/>
        <title>deepsix</title>
      </Head>
      <style jsx>{`
        :global(html,body) {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        :global(body) {
          font-size: calc(10px + 1vmin);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #0f0f0f;
          color: #f0f0f0;
        }

        .content {
          padding: 0 32px;
        }
      `}</style>

      <p>we're joining the club, see ya in 2021.</p>

    </div>
  )
}
