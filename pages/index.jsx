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
        main {
          height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #0f0f0f;
          color: #f0f0f0;
        }
        footer {
          padding: 1em 0;
          text-align:center;
        }
      `}</style>
      <main className="Landing">
        <p>new year, we'll be back soon.</p>
      </main>
      <footer>
        <div className="Content">
          <p>listen before any of you come and attack me for mentioning the word 'soon' i'm sorry, okay? 😅</p>
        </div>
      </footer>

    </div>
  )
}
