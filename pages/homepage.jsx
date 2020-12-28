import Head from 'next/head'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import LatestRelease from '../components/LatestRelease/'
import ShopPreview from '../components/ShopPreview'
import Twitter from '../components/Twitter/'

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
            <h1>deepsix</h1>
          </div>
        </header>

        <main>
          <div className="Content">
            <LatestRelease />
          </div>

          <div className="Content">
            <h1>shop</h1>
            <ShopPreview />
            <h1>tour</h1>
            <h1>news</h1>
            <h1>social</h1>
            <Twitter />
            <h1>contact</h1>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}