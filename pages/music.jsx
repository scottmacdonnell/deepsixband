import Head from 'next/head'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import LatestRelease from '../components/LatestRelease'
import Releases from '../components/Releases/'

export default function Music() {
  return (
    <div className="Music">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Music - deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <Header 
            page="Music"
          />
        </header>

        <main>
          <div className="Content">
            <LatestRelease />
            <Releases 
              amount="4"
            />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}