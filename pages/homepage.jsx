import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="Index">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario."/>
        <title>deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <div className="Content">
            <Header />
          </div>
        </header>

        <main>
          <div className="Content">
            <h1>deepsix</h1>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}