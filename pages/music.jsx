import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Releases from '../components/Releases'

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
          <Releases />
        </main>

      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}