import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import LatestRelease from '../components/LatestRelease'

export default function Index() {
  return (
    <div className="Index">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario, Canada."/>
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
            <LatestRelease />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}