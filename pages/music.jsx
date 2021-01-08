import Head from 'next/head'

import Header from '../components/Header'
import LatestRelease from '../components/LatestRelease'
import Releases from '../components/Releases'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Checkout() {
  return (
    <div className="Checkout">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Music - deepsix</title>
      </Head>
      <div className="Page">
        
        <header>
          <Header 
            name="Music"
          />
        </header>

        <main>
          <LatestRelease />
          <Releases />
          <Newsletter />
        </main>

      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}