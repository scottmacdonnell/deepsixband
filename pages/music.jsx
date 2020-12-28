import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import LatestRelease from '../components/LatestRelease'
import ShopItems from '../components/ShopItems'

export default function Music() {
  return (
    <div className="Music">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Music - deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <div className="Content">
            <Header />
          </div>
        </header>

        <main>
          <div className="Content">
            <h1>music</h1>
            <LatestRelease />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}